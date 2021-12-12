import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN} from "../../../../utils/path";
import CurrentCheckComponent from "./CurrentCheckComponent/CurrentCheckComponent";
import {Container, DepartamentBlock, EmployeesCardsMenu, Input, Search, SearchLogo} from "./AdminMenuLeftStyle";
import {
    AddText,
    AddWrapper,
    HeaderCheck, IcoAdd,
    ItemAdd,
    ItemSelect,
    SelectWrapper
} from "./CurrentCheckComponent/CurrentCheckComponentStyle";
import Departament from "./Departament/Departament";
import Select from 'react-select';
import './AdminMenuLeftSelect.css'
import Modal from "../../../common/Modal/Modal";
import NewCardModal from "./NewCardModal/NewCardModal";
import {TypeCardBlock} from "./NewCardModal/NewCardModalStyle";
import NewEmployerModal from "./NewEmployerModal/NewEmployerModal";
import NewDepartamentModal from "./NewDepartamentModal/NewDepartamentModal";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import useDebounce from "../../../../utils/useDebounce";
import {createQuery} from "../../../../utils/CreateQuery";

let activeStyle = {
    display: "none",
};


const customStyles = {
    option: {
        borderRadius: '10px'
    }
}

export function SearchC({
                            isSearchLogo = true,
                            type = 'text',

                            placeholder = '',
                            handleChange = () => {
                            },
                            value = '',
                            input = null,
                        }) {

    const [focus, isFocus] = useState(false)

    return (
        <Search focus={focus}>

            {

                input === null
                    ?
                    <Input onFocus={() => isFocus(true)} onBlur={() => isFocus(false)} onChange={handleChange}
                           value={value}
                           placeholder={placeholder} id={'search_1'} type={type}/>

                    :
                    input()

            }


            {isSearchLogo && <SearchLogo for={'search_1'}>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.6041 10.915L17.0875 15.3983C17.2451 15.556 17.3335 15.7698 17.3335 15.9928C17.3334 16.2157 17.2447 16.4295 17.0871 16.5871C16.9294 16.7446 16.7155 16.8331 16.4926 16.833C16.2697 16.833 16.0559 16.7443 15.8983 16.5866L11.415 12.1033C10.0747 13.1414 8.38937 13.6299 6.70174 13.4694C5.01412 13.309 3.451 12.5117 2.33037 11.2396C1.20975 9.96763 0.615795 8.31648 0.669346 6.62209C0.722897 4.9277 1.41993 3.31735 2.61864 2.11864C3.81735 0.919928 5.4277 0.222897 7.12209 0.169346C8.81648 0.115795 10.4676 0.709746 11.7396 1.83037C13.0117 2.951 13.809 4.51412 13.9694 6.20174C14.1299 7.88937 13.6414 9.57473 12.6033 10.915H12.6041ZM7.3333 11.8325C8.65938 11.8325 9.93115 11.3057 10.8688 10.368C11.8065 9.43032 12.3333 8.15855 12.3333 6.83247C12.3333 5.50639 11.8065 4.23462 10.8688 3.29694C9.93115 2.35925 8.65938 1.83247 7.3333 1.83247C6.00722 1.83247 4.73545 2.35925 3.79777 3.29694C2.86009 4.23462 2.3333 5.50639 2.3333 6.83247C2.3333 8.15855 2.86009 9.43032 3.79777 10.368C4.73545 11.3057 6.00722 11.8325 7.3333 11.8325Z"
                          fill="#001A68"/>
                </svg>
            </SearchLogo>}

        </Search>
    );
}


const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

const AdminMenuLeft = observer(() => {

    const {admin} = useContext(Context)

    const [selectedOption, setSelectedOption] = useState(null);
    const [modalCard, setModalCard] = useState(false)
    const [modalEmployer, setModalEmployer] = useState(false)
    const [modalDepartament, setModalDeartament] = useState(false)


    const [department, changeDep] = useState('')
    const [status, changeStatus] = useState('')
    const [type, changeType] = useState('')
    const [search, setSearch] = useState('')
    const debouncedSearchTerm = useDebounce(search, 500);

    const allDepartments = admin.allDepartments.map(el => ({value: el.name, label: el.name}))

    const allStatus = [
        {value: 'ACTIVE', label: 'ACTIVE'},
        {value: 'BLOCKING', label: 'BLOCKING'},
        {value: 'TEMPORARY BLOCKING', label: 'TEMPORARY BLOCKING'},
    ]


    useEffect(() => {
        admin.allTypeOfCards()
            .then(() => {

                }
            ).catch(() => {

        })
    }, [])

    useEffect(() => {
        admin.getAllTree().then(() => {

        }).catch(() => {

        })
    }, [])

    useEffect(() => {
        admin.getAllWorkers().then(() => {

        }).catch(() => {

        })
    }, [])

    useEffect(() => {
        admin.getAllDepartments().then(() => {

        }).catch(() => {

        })
    }, [])


    useEffect(() => {
        admin.getCurrentCheck().then(() => {

        }).catch(() => {

        })
    }, [])

    useEffect(() => {
        let obj = {}
        if(department) obj.department = department.value
        if(status) obj.status = status.value
        if(type) obj.type = type.value
        if(debouncedSearchTerm) obj.worker_name = debouncedSearchTerm

        debugger

        admin.getAllTree(createQuery(obj)).then(()=>{

        }).catch(()=>{

        })

    }, [department, status, type, debouncedSearchTerm])




    return (
        <Container>
            <HeaderCheck>
                Текущий счёт
            </HeaderCheck>

            <CurrentCheckComponent isLink={true}/>


            <EmployeesCardsMenu>
                <HeaderCheck>
                    Карты сотрудников
                </HeaderCheck>

                <SearchC value={search} handleChange={(e) => setSearch(e.target.value)}/>
                <SelectWrapper>

                    <ItemSelect width={'180px'}>
                        <Select
                            isClearable
                            className={'ads'}
                            classNamePrefix="menu_admin"
                            placeholder='Отдел'
                            onChange={changeDep}
                            options={allDepartments}
                        />
                    </ItemSelect>

                    <ItemSelect width={'150px'}>
                        <Select
                            isClearable
                            className={'ads'}
                            classNamePrefix="menu_admin"
                            placeholder='Статус'
                            onChange={changeStatus}
                            options={allStatus}
                        />
                    </ItemSelect>

                    <ItemSelect width={'150px'}>
                        <Select
                            isClearable
                            className={'ads'}
                            classNamePrefix="menu_admin"
                            placeholder='Категория'
                            onChange={changeType}
                            options={admin.getTypeOfCards}
                        />
                    </ItemSelect>


                </SelectWrapper>

                <AddWrapper>
                    <ItemAdd onClick={() => setModalEmployer(true)}>
                        <IcoAdd>
                            <svg width="55" height="43" viewBox="0 0 55 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="7" y="16" width="42" height="27" rx="7" fill="#001A68" fill-opacity="0.3"/>
                                <rect width="55" height="36" rx="7" fill="#001A68"/>
                                <path
                                    d="M28.0001 9.75C25.5571 9.75 23.6584 11.8767 23.9342 14.304L24.1744 16.4178C24.3955 18.3635 26.0418 19.8333 28.0001 19.8333C29.9583 19.8333 31.6046 18.3635 31.8257 16.4178L32.0659 14.304C32.3417 11.8767 30.443 9.75 28.0001 9.75Z"
                                    fill="white"/>
                                <path
                                    d="M27.8945 21.7051C28.0128 21.2481 27.6968 20.75 27.2246 20.75H26.3009C23.723 20.75 21.4911 22.5404 20.9319 25.0569L20.8402 25.4691C20.7512 25.8699 21.0561 26.25 21.4666 26.25H27.5104C28.0406 26.25 28.3628 25.6239 28.1537 25.1366C27.8778 24.4938 27.7251 23.7856 27.7251 23.0417C27.7251 22.5801 27.7839 22.1322 27.8945 21.7051Z"
                                    fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M37.1667 23.0416C37.1667 20.7635 35.3199 18.9166 33.0417 18.9166C30.7635 18.9166 28.9167 20.7635 28.9167 23.0416C28.9167 25.3198 30.7635 27.1666 33.0417 27.1666C35.3199 27.1666 37.1667 25.3198 37.1667 23.0416ZM30.6061 23.0416C30.6061 22.7126 30.8729 22.4458 31.202 22.4458L32.4459 22.4458V21.326C32.4459 20.9969 32.7126 20.7302 33.0417 20.7302C33.3708 20.7302 33.6376 20.9969 33.6376 21.326L33.6376 22.4458H34.8815C35.2106 22.4458 35.4773 22.7126 35.4773 23.0416C35.4773 23.3707 35.2106 23.6375 34.8815 23.6375H33.6376L33.6376 24.7573C33.6376 25.0864 33.3708 25.3531 33.0417 25.3531C32.7126 25.3531 32.4459 25.0864 32.4459 24.7573V23.6375L31.202 23.6375C30.8729 23.6375 30.6061 23.3707 30.6061 23.0416Z"
                                      fill="white"/>
                            </svg>
                        </IcoAdd>

                        <AddText>
                            Добавить сотрудника
                        </AddText>
                    </ItemAdd>

                    <ItemAdd onClick={() => setModalDeartament(true)}>
                        <IcoAdd>
                            <svg width="55" height="43" viewBox="0 0 55 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="7" y="16" width="42" height="27" rx="7" fill="#001A68" fill-opacity="0.3"/>
                                <rect width="55" height="36" rx="7" fill="#001A68"/>
                                <path
                                    d="M28.0001 9.75C25.5571 9.75 23.6584 11.8767 23.9342 14.304L24.1744 16.4178C24.3955 18.3635 26.0418 19.8333 28.0001 19.8333C29.9583 19.8333 31.6046 18.3635 31.8257 16.4178L32.0659 14.304C32.3417 11.8767 30.443 9.75 28.0001 9.75Z"
                                    fill="white"/>
                                <path
                                    d="M27.8945 21.7051C28.0128 21.2481 27.6968 20.75 27.2246 20.75H26.3009C23.723 20.75 21.4911 22.5404 20.9319 25.0569L20.8402 25.4691C20.7512 25.8699 21.0561 26.25 21.4666 26.25H27.5104C28.0406 26.25 28.3628 25.6239 28.1537 25.1366C27.8778 24.4938 27.7251 23.7856 27.7251 23.0417C27.7251 22.5801 27.7839 22.1322 27.8945 21.7051Z"
                                    fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M37.1667 23.0416C37.1667 20.7635 35.3199 18.9166 33.0417 18.9166C30.7635 18.9166 28.9167 20.7635 28.9167 23.0416C28.9167 25.3198 30.7635 27.1666 33.0417 27.1666C35.3199 27.1666 37.1667 25.3198 37.1667 23.0416ZM30.6061 23.0416C30.6061 22.7126 30.8729 22.4458 31.202 22.4458L32.4459 22.4458V21.326C32.4459 20.9969 32.7126 20.7302 33.0417 20.7302C33.3708 20.7302 33.6376 20.9969 33.6376 21.326L33.6376 22.4458H34.8815C35.2106 22.4458 35.4773 22.7126 35.4773 23.0416C35.4773 23.3707 35.2106 23.6375 34.8815 23.6375H33.6376L33.6376 24.7573C33.6376 25.0864 33.3708 25.3531 33.0417 25.3531C32.7126 25.3531 32.4459 25.0864 32.4459 24.7573V23.6375L31.202 23.6375C30.8729 23.6375 30.6061 23.3707 30.6061 23.0416Z"
                                      fill="white"/>
                            </svg>
                        </IcoAdd>

                        <AddText>
                            Добавить отдел
                        </AddText>
                    </ItemAdd>

                    <ItemAdd onClick={() => setModalCard(true)}>
                        <IcoAdd>
                            <svg width="55" height="43" viewBox="0 0 55 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="7" y="16" width="42" height="27" rx="7" fill="#001A68" fill-opacity="0.3"/>
                                <rect width="55" height="36" rx="7" fill="#001A68"/>
                                <path
                                    d="M28.0001 9.75C25.5571 9.75 23.6584 11.8767 23.9342 14.304L24.1744 16.4178C24.3955 18.3635 26.0418 19.8333 28.0001 19.8333C29.9583 19.8333 31.6046 18.3635 31.8257 16.4178L32.0659 14.304C32.3417 11.8767 30.443 9.75 28.0001 9.75Z"
                                    fill="white"/>
                                <path
                                    d="M27.8945 21.7051C28.0128 21.2481 27.6968 20.75 27.2246 20.75H26.3009C23.723 20.75 21.4911 22.5404 20.9319 25.0569L20.8402 25.4691C20.7512 25.8699 21.0561 26.25 21.4666 26.25H27.5104C28.0406 26.25 28.3628 25.6239 28.1537 25.1366C27.8778 24.4938 27.7251 23.7856 27.7251 23.0417C27.7251 22.5801 27.7839 22.1322 27.8945 21.7051Z"
                                    fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M37.1667 23.0416C37.1667 20.7635 35.3199 18.9166 33.0417 18.9166C30.7635 18.9166 28.9167 20.7635 28.9167 23.0416C28.9167 25.3198 30.7635 27.1666 33.0417 27.1666C35.3199 27.1666 37.1667 25.3198 37.1667 23.0416ZM30.6061 23.0416C30.6061 22.7126 30.8729 22.4458 31.202 22.4458L32.4459 22.4458V21.326C32.4459 20.9969 32.7126 20.7302 33.0417 20.7302C33.3708 20.7302 33.6376 20.9969 33.6376 21.326L33.6376 22.4458H34.8815C35.2106 22.4458 35.4773 22.7126 35.4773 23.0416C35.4773 23.3707 35.2106 23.6375 34.8815 23.6375H33.6376L33.6376 24.7573C33.6376 25.0864 33.3708 25.3531 33.0417 25.3531C32.7126 25.3531 32.4459 25.0864 32.4459 24.7573V23.6375L31.202 23.6375C30.8729 23.6375 30.6061 23.3707 30.6061 23.0416Z"
                                      fill="white"/>
                            </svg>
                        </IcoAdd>

                        <AddText>
                            Выпустить карту
                        </AddText>
                    </ItemAdd>

                </AddWrapper>

            </EmployeesCardsMenu>

            <DepartamentBlock>
                {admin.allTree.map(el =>
                    <Departament name={el.name} amountOfCards={el.amountOfCards} key={el.id} workers={el.workers}/>
                )}

                {/*<Departament/>
                <Departament/>
                <Departament/>*/}
            </DepartamentBlock>

            <NewCardModal active={modalCard} setActive={setModalCard}/>
            <NewEmployerModal active={modalEmployer} setActive={setModalEmployer}/>
            <NewDepartamentModal employers={admin.allWorkers} active={modalDepartament} setActive={setModalDeartament}/>
        </Container>
    );
});

export default AdminMenuLeft;