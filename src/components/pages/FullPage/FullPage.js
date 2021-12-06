import React from 'react';
import Header from "../MainPage/Header/Header";
import {Content} from "../MainPage/MainPageStyle";
import {Outlet} from "react-router-dom";

const FullPage = () => {
    return (
        <div>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </div>
    );
};

export default FullPage;