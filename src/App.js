import React from "react";
import {Route, Routes} from "react-router-dom";
import {ADMIN, AUTH_ROUTE, FULL, FULLPAGEADMIN, MAIN_PAGE, routes, USER} from "./utils/path";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/pages/MainPage/Header/Header";
import AdminInterfaces from "./components/pages/MainPage/AdminInterfaces/AdminInterfaces";
import UserInterface from "./components/pages/MainPage/UserInterface/UserInterface";
import AdminFullPage from "./components/pages/FullPage/Admin/AdminFullPage";
import FullPage from "./components/pages/FullPage/FullPage";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path={AUTH_ROUTE} element={< AuthPage/>}/>
                <Route path={MAIN_PAGE} element={< MainPage/>}>

                    <Route path={ADMIN} element={<AdminInterfaces/>}>
                    </Route>

                    <Route path={USER} element={< UserInterface/>}>

                    </Route>
                </Route>

                <Route path={FULL} element={<FullPage/>} >
                    <Route path={FULLPAGEADMIN} element={<AdminFullPage/>} >

                    </Route>
                </Route>


            </Routes>
        </div>
    );
}

export default App;
