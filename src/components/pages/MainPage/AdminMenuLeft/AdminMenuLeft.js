import React from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN} from "../../../../utils/path";
import CurrentCheckComponent from "./CurrentCheckComponent/CurrentCheckComponent";
import {Container, DepartamentBlock, EmployeesCardsMenu, Input, Search, SearchLogo} from "./AdminMenuLeftStyle";
import {HeaderCheck} from "./CurrentCheckComponent/CurrentCheckComponentStyle";
import Departament from "./Departament/Departament";


let activeStyle = {
    display: "none",
};

function SearchC() {
    return (
        <Search>
            <Input placeholder={'Поиск'} id={'search_1'} type="text"/>

            <SearchLogo for={'search_1'}>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6041 10.915L17.0875 15.3983C17.2451 15.556 17.3335 15.7698 17.3335 15.9928C17.3334 16.2157 17.2447 16.4295 17.0871 16.5871C16.9294 16.7446 16.7155 16.8331 16.4926 16.833C16.2697 16.833 16.0559 16.7443 15.8983 16.5866L11.415 12.1033C10.0747 13.1414 8.38937 13.6299 6.70174 13.4694C5.01412 13.309 3.451 12.5117 2.33037 11.2396C1.20975 9.96763 0.615795 8.31648 0.669346 6.62209C0.722897 4.9277 1.41993 3.31735 2.61864 2.11864C3.81735 0.919928 5.4277 0.222897 7.12209 0.169346C8.81648 0.115795 10.4676 0.709746 11.7396 1.83037C13.0117 2.951 13.809 4.51412 13.9694 6.20174C14.1299 7.88937 13.6414 9.57473 12.6033 10.915H12.6041ZM7.3333 11.8325C8.65938 11.8325 9.93115 11.3057 10.8688 10.368C11.8065 9.43032 12.3333 8.15855 12.3333 6.83247C12.3333 5.50639 11.8065 4.23462 10.8688 3.29694C9.93115 2.35925 8.65938 1.83247 7.3333 1.83247C6.00722 1.83247 4.73545 2.35925 3.79777 3.29694C2.86009 4.23462 2.3333 5.50639 2.3333 6.83247C2.3333 8.15855 2.86009 9.43032 3.79777 10.368C4.73545 11.3057 6.00722 11.8325 7.3333 11.8325Z" fill="#001A68"/>
                </svg>
            </SearchLogo>
        </Search>
    );
}

const AdminMenuLeft = () => {
    return (
        <Container>
            <CurrentCheckComponent />



            <EmployeesCardsMenu>
                <HeaderCheck>
                    Карты сотрудников
                </HeaderCheck>

                <SearchC/>
            </EmployeesCardsMenu>

            <DepartamentBlock>
                <Departament />
                <Departament />
                <Departament />
                <Departament />
            </DepartamentBlock>



        </Container>
    );
};

export default AdminMenuLeft;