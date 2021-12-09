import React, {useContext, useEffect, useState} from 'react';
import Modal from "../../../../common/Modal/Modal";
import {MiddleContent, ModalContent, ModalFooter} from "../../../../common/Modal/ModalStyle";
import MyButton from "../../../../common/Buttons/MyButton";
import Card from "../../UserInterface/Cards/Card/Card";
import {
    ButtonAdd, Check,
    EmployerItem,
    EmployersList,
    EmployersSelectBlock, ItemName, LeftSide,
    Section1,
    Section2,
    SelectWrapper,
    TypeCardBlock,
    TypeCardText
} from "./NewDepartamentModalStyle";
import Select from "react-select";
import {AccountComponent} from "../../UserInterface/UserInterface";
import {SearchC} from "../AdminMenuLeft";
import {InputWrapper} from "../NewEmployerModal/NewEmployerModalStyle";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";


const NewDepartamentModal = observer(({employers = [], active, setActive}) => {

    const {admin} = useContext(Context)
    const [nameDepartament, setNameDepartament] = useState('')
    const [workers, setWorkers] = useState([])

    const handlerOnChange = (e) => {
        setNameDepartament(e.target.value);

    }

    function createDepartment() {
        const data = {
            "name": nameDepartament.trim(),
            "workers": workers,
        }
        admin.addDepartment(data)
            .then(() => {
                setWorkers([])
                setActive(false)
                setNameDepartament('')

                admin.getAllTree().then(() => {

                }).catch(() => {

                })

                admin.getAllDepartments().then(() => {

                }).catch(() => {

                })

            })
            .catch(() => {

            })

    }




    function addEmp(id) {
        if (!workers.some(el => el.id === id)) {
            setWorkers([...workers, {
                id: id,
            }])
        }
    }


    function deleteEmp(id) {
        debugger
        setWorkers(workers.filter(el => !el.id === id))
    }

    return (
        <Modal headerName={'Новый отдел'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <TypeCardText>
                        Название
                    </TypeCardText>
                    <InputWrapper>
                        <SearchC handleChange={handlerOnChange} value={nameDepartament} placeholder={'Название отдела'}
                                 isSearchLogo={false}/>
                    </InputWrapper>

                </Section1>

                <Section2>

                    <TypeCardText>
                        {employers.length === 0 ? 'Вы не создавали сотрудников' : 'Сотрудники'}
                    </TypeCardText>


                    {employers.length !== 0 &&
                    <EmployersList>
                        {employers.map(el => {
                            let isAdd = workers.some(it => it.id === el.id)

                            return (
                                <EmployerItem onClick={() => isAdd ? deleteEmp(el.id) : addEmp(el.id)}>
                                    <LeftSide>
                                        {isAdd && <Check>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z"
                                                      fill="#32C665"/>
                                            </svg>
                                        </Check>}

                                        <ItemName>
                                            {el.surname + ' ' + el.name + ' ' + el.patronymic}
                                        </ItemName>
                                    </LeftSide>

                                    <ButtonAdd color={'#0057FF'}>
                                        {isAdd ? 'Отмена' : 'Добавить'}
                                    </ButtonAdd>
                                </EmployerItem>
                            )
                        })}

                     {/*   <EmployerItem>
                            <LeftSide>
                                <Check>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z"
                                              fill="#32C665"/>
                                    </svg>
                                </Check>

                                <ItemName>
                                    Иванов Иван Иванович
                                </ItemName>
                            </LeftSide>

                            <ButtonAdd color={'rgba(0, 26, 104, 0.5)'}>
                                Отмена
                            </ButtonAdd>
                        </EmployerItem>
                        <EmployerItem>
                            <LeftSide>
                                <Check>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z" fill="#32C665"/>
                                    </svg>
                                </Check>

                                <ItemName>
                                    Иванов Иван Иванович
                                </ItemName>
                            </LeftSide>

                            <ButtonAdd color={'#0057FF'}>
                                Добавить
                            </ButtonAdd>
                        </EmployerItem>
                        <EmployerItem>
                            <LeftSide>
                                <Check>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z"
                                              fill="#32C665"/>
                                    </svg>
                                </Check>

                                <ItemName>
                                    Иванов Иван Иванович
                                </ItemName>
                            </LeftSide>

                            <ButtonAdd color={'rgba(0, 26, 104, 0.5)'}>
                                Отмена
                            </ButtonAdd>
                        </EmployerItem>
                        <EmployerItem>
                            <LeftSide>
                                <Check>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z" fill="#32C665"/>
                                    </svg>
                                </Check>

                                <ItemName>
                                    Иванов Иван Иванович
                                </ItemName>
                            </LeftSide>

                            <ButtonAdd color={'#0057FF'}>
                                Добавить
                            </ButtonAdd>
                        </EmployerItem>
                        <EmployerItem>
                            <LeftSide>
                                <Check>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM10.7899 15.2899C11.07 15.5699 11.5299 15.5599 11.7999 15.2699L16.2199 10.4699C16.4599 10.1999 16.4399 9.78988 16.1799 9.54988C15.9199 9.30988 15.4999 9.31988 15.2599 9.58988L11.2699 13.9299L8.86995 11.5299C8.61995 11.2799 8.19995 11.2799 7.94995 11.5299C7.69995 11.7799 7.69995 12.1999 7.94995 12.4499L10.7899 15.2899Z"
                                              fill="#32C665"/>
                                    </svg>
                                </Check>

                                <ItemName>
                                    Иванов Иван Иванович
                                </ItemName>
                            </LeftSide>

                            <ButtonAdd color={'rgba(0, 26, 104, 0.5)'}>
                                Отмена
                            </ButtonAdd>
                        </EmployerItem>*/}
                    </EmployersList>
                    }


                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => {
                    setWorkers([])
                    setActive(false)
                    setNameDepartament('')
                }} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton disabled={nameDepartament.trim() == ''} clickHandler={() => {
                    createDepartment()
                }} width={'200px'} height={'50px'}>
                    Создать отдел
                </MyButton>
            </ModalFooter>
        </Modal>
    );
});

export default NewDepartamentModal;