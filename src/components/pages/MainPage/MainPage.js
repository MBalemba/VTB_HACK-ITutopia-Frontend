import React from 'react';
import InfoBlock from "./InfoBlock/InfoBlock";
import {Content} from "./MainPageStyle";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <Header />
            <Content>
                <InfoBlock />
                <Outlet />
            </Content>

        </>
    );
};

export default MainPage;