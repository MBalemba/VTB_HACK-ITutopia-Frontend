import React from "react";
import {Route, Routes} from "react-router-dom";
import {ADMIN, AUTH_ROUTE, MAIN_PAGE, routes, USER} from "./utils/path";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/pages/MainPage/Header/Header";
import AdminInterfaces from "./components/pages/MainPage/AdminInterfaces/AdminInterfaces";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path={AUTH_ROUTE} element={< AuthPage/>}/>
                <Route path={MAIN_PAGE} element={< MainPage/>}>

                    <Route path={ADMIN} element={<AdminInterfaces/>}>
                    </Route>

                    <Route path={USER} element={< AuthPage/>}>

                    </Route>
                </Route>


            </Routes>
        </div>
    );
}

export default App;
