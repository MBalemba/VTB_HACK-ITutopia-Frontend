import React, {useContext, useEffect} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {ADMIN, AUTH_ROUTE, FULL, FULLPAGEADMIN, MAIN_PAGE, routes, USER} from "./utils/path";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/pages/MainPage/Header/Header";
import AdminInterfaces from "./components/pages/MainPage/AdminInterfaces/AdminInterfaces";
import UserInterface from "./components/pages/MainPage/UserInterface/UserInterface";
import AdminFullPage from "./components/pages/FullPage/Admin/AdminFullPage";
import FullPage from "./components/pages/FullPage/FullPage";
import {observer} from "mobx-react-lite";
import {Context} from "./index";


export function Redirect(to) {

    return (
        <>
            return <Navigate to={to} />
        </>
    )
}


const App = observer(() => {

    const {login} = useContext(Context)
    let navigate = useNavigate();

    useEffect(() => {

        login.doRefresh().then(() => {

            setTimeout(() => {
                login.setFirstLoad(false)
            }, 500)


        }).catch(() => {

            setTimeout(() => {
                login.setFirstLoad(false)
            }, 500)
            navigate('../'+AUTH_ROUTE, { replace: true })
        })
    }, [])


    if( login.FirstLoad){
        return <div>
            загрузка
        </div>
    }

    return (
        <div className="App">



                <Routes>

                    <Route path={'/'}>
                        <Route path={AUTH_ROUTE} element={< AuthPage/>}/>

                        <Route path={MAIN_PAGE} element={< MainPage/>}>
                            <Route path={ADMIN} element={<AdminInterfaces/>}>
                            </Route>

                            <Route path={USER} element={< UserInterface/>}>
                                <Route path={':id'} element={< UserInterface/>}></Route>
                            </Route>

                            <Route index element={<Navigate to={ADMIN} />} />
                            <Route path="*" element={<Navigate to={ADMIN} />} />
                        </Route>

                        <Route path={FULL} element={<FullPage/>} >
                            <Route path={FULLPAGEADMIN} element={<AdminFullPage/>} >

                            </Route>

                            <Route path="*" element={<Navigate to={FULLPAGEADMIN} />} />
                        </Route>

                        <Route index element={<Navigate to={AUTH_ROUTE} />} />
                        <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
                    </Route>

                </Routes>


        </div>
    );
})

export default App;
