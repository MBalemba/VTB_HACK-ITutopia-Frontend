import React, {useContext, useEffect, useState} from 'react';
import Modal from "../../../../common/Modal/Modal";
import {MiddleContent, ModalContent, ModalFooter} from "../../../../common/Modal/ModalStyle";
import MyButton from "../../../../common/Buttons/MyButton";
import Card from "../../UserInterface/Cards/Card/Card";
import {
    EmployersSelectBlock, InputWrapper,
    Section1,
    Section2,
    SelectWrapper,
    TypeCardBlock,
    TypeCardText
} from "./NewEmployerModalStyle";
import Select from "react-select";
import {AccountComponent} from "../../UserInterface/UserInterface";
import {SearchC} from "../AdminMenuLeft";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";








const NewEmployerModal = observer(({active, setActive}) => {
    const {admin} = useContext(Context)


    const departament = admin.allDepartments.map(el=>({
        value: el.id,
        label: el.name,
    }))

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [depart, setDepart] = useState({value: -1,
        label: 'Индивидуальные',});


    useEffect(()=>{
        setDepart({
            value: admin.allDepartments[0].id,
            label: admin.allDepartments[0].name,})
    }, [admin.allDepartments[0].name])

    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    const handleMiddleName = (e)=>{
        setMiddleName(e.target.value)
    }

    function addEmp() {

        let data = {
            "department_id": depart.value,
            "name": firstName,
            "patronymic": middleName,
            "surname": lastName,
        }

        if(depart.label === 'Индивидуальные'){
            data = {...data, "department_id": admin.allDepartments[0].id}
        }


        admin.addWorker(data)
            .then(() => {


                setActive(false)
                admin.getAllTree().then(() => {

                }).catch(() => {

                })

                admin.getAllWorkers().then(() => {

                }).catch(() => {

                })

            })
            .catch(() => {

            })
    }

    return (
        <Modal headerName={'Новый сотрудник'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <EmployersSelectBlock>
                        <AccountComponent fio={(lastName +firstName + middleName)==''?'Ф.И.О.' :(lastName + ' '+firstName + ' '+ middleName)} departamentName={depart.label} src='' />
                    </EmployersSelectBlock>
                </Section1>

                <Section2>
                    <TypeCardBlock>

                        <TypeCardText>
                            Выберете отдел
                        </TypeCardText>
                        <SelectWrapper>
                            <Select
                                className={'ads'}
                                defaultValue={{
                                    value: -1,
                                    label: 'Индивидуальные',
                                }}
                                classNamePrefix="menu_admin"
                                placeholder = 'Категория'
                                onChange={(data)=>{setDepart(data) }}
                                options={departament}
                            />
                        </SelectWrapper>

                         <TypeCardText>
                             Фамилия
                         </TypeCardText>

                        <InputWrapper>
                            <SearchC handleChange={handleLastName} value={lastName} placeholder={'фамилия'} isSearchLogo={false}/>
                        </InputWrapper>

                         <TypeCardText>
                             Имя
                         </TypeCardText>

                        <InputWrapper>
                            <SearchC handleChange={handleFirstName} value={firstName} placeholder={'имя'} isSearchLogo={false}/>
                        </InputWrapper>
                         <TypeCardText>
                             Отчество
                         </TypeCardText>

                        <InputWrapper>
                            <SearchC handleChange={handleMiddleName} value={middleName} placeholder={'Отчество'} isSearchLogo={false}/>
                        </InputWrapper>


                    </TypeCardBlock>
                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={()=>setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton disabled={middleName.trim() == '' || middleName.trim() == '' || middleName.trim() == ''} clickHandler={addEmp} width={'200px'} height={'50px'}>
                    Добавить сотрудника
                </MyButton>
            </ModalFooter>
        </Modal>
    );
});

export default NewEmployerModal;