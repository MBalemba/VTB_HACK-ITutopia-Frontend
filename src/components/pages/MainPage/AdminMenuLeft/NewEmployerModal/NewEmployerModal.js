import React, {useState} from 'react';
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




const departament = [
    { value: 'Индивидуальные', label: 'не выбрано' },
    { value: 'Отдел дизайна', label: 'Отдел дизайна' },
    { value: 'Отдел маркетинга', label: 'Отдел маркетинга' },
];



const NewEmployerModal = ({active, setActive}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [depart, setDepart] = useState(departament[0]);

    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    const handleMiddleName = (e)=>{
        setMiddleName(e.target.value)
    }

    return (
        <Modal headerName={'Новый сотрудник'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <EmployersSelectBlock>
                        <AccountComponent fio={(lastName +firstName + middleName)==''?'Ф.И.О.' :(lastName + ' '+firstName + ' '+ middleName)} departamentName={depart.value} src='' />
                    </EmployersSelectBlock>
                </Section1>

                <Section2>
                    <TypeCardBlock>
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
                        <TypeCardText>
                            Выберете отдел
                        </TypeCardText>
                        <SelectWrapper>
                            <Select
                                className={'ads'}
                                defaultValue={departament[0]}
                                classNamePrefix="menu_admin"
                                placeholder = 'Категория'
                                onChange={(data)=>{setDepart(data) }}
                                options={departament}
                            />
                        </SelectWrapper>

                    </TypeCardBlock>
                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={()=>setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton width={'200px'} height={'50px'}>
                    Добавить сотрудника
                </MyButton>
            </ModalFooter>
        </Modal>
    );
};

export default NewEmployerModal;