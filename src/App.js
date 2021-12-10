import React, {useContext, useEffect} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {ADMIN, AUTH_ROUTE, FULL, FULLPAGEADMIN, FULLPAGEUSER, MAIN_PAGE, routes, USER} from "./utils/path";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/pages/MainPage/Header/Header";
import AdminInterfaces from "./components/pages/MainPage/AdminInterfaces/AdminInterfaces";
import UserInterface from "./components/pages/MainPage/UserInterface/UserInterface";
import AdminFullPage from "./components/pages/FullPage/Admin/AdminFullPage";
import FullPage from "./components/pages/FullPage/FullPage";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {blablabla} from "./http/UserApi";
import UserFullPage from "./components/pages/FullPage/User/UserFullPage";
import styled from "styled-components";
import {MoonLoader} from "react-spinners";

export function Redirect(to) {

    return (
        <>
            return <Navigate to={to} />
        </>
    )
}


const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const App = observer(() => {

    const {login} = useContext(Context)
    let navigate = useNavigate();

    useEffect(()=>{

    }, [])


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
        return <Loader>
            <div>
                <MoonLoader />
            </div>
        </Loader>
    }

    return (
        <div className="App">



                <Routes>

                    <Route path={'/'}>
                        <Route path={AUTH_ROUTE} element={< AuthPage/>}/>

                        <Route path={MAIN_PAGE} element={< MainPage/>}>
                            <Route path={ADMIN} element={<AdminInterfaces/>}>
                            </Route>

                            <Route path={USER} exec element={< UserInterface/>}>
                                <Route  path={':id'} element={<UserInterface/>}></Route>
                            </Route>

                            <Route index element={<Navigate to={ADMIN} />} />
                            <Route path="*" element={<Navigate to={ADMIN} />} />
                        </Route>

                        <Route path={FULL} element={<FullPage/>} >
                            <Route path={FULLPAGEADMIN} element={<AdminFullPage/>} >

                            </Route>


                        </Route>

                        <Route index element={<Navigate to={AUTH_ROUTE} />} />
                        <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
                    </Route>

                </Routes>


        </div>
    );
})

export default App;
