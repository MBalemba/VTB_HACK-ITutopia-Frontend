import React from 'react';
import InfoBlock from "./InfoBlock/InfoBlock";
import {Content} from "./MainPageStyle";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import AdminMenuLeft from "./AdminMenuLeft/AdminMenuLeft";

const MainPage = () => {
    return (
        <>
            <Header />
            <Content>
                <InfoBlock />
                <AdminMenuLeft/>
                <Outlet />
            </Content>

        </>
    );
};

export default MainPage;