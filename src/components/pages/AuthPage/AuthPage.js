import React, {useContext, useEffect, useState} from 'react';
import MyButton from "../../common/Buttons/MyButton";
import illustration from './../../../assets/img/Illustration.png'
import logo from './../../../assets/img/logoAuthField.svg'
import {
    AuthForm,
    Autorization, ButtonWrapper,
    HolstAuth, Illustration,
    Input,
    InputLogin,
    InputPassword,
    InputWrapper,
    Logo
} from "./AuthPageStyles";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN, AUTH_ROUTE, MAIN_PAGE} from "../../../utils/path";
import {Redirect} from "../../../App";
import { Navigate } from "react-router-dom";

const AuthPage = observer(() => {

    let navigate = useNavigate();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const {login: loginStore} = useContext(Context)


    function doRequest() {

        loginStore.doAutorizate(login, password).then(()=>{

        })
    }


    if(loginStore.IsAuth){
        return <Navigate to={('../'+MAIN_PAGE+'/'+ADMIN)} />
    }

    return (
        <HolstAuth>


            <AuthForm>

                <Logo>
                    <img src={logo} alt="logo"/>
                </Logo>

                <Autorization>
                    Авторизация
                </Autorization>


                <InputWrapper>
                    <Input value={login} onChange={(e)=>setLogin(e.target.value)} type={'text'} placeholder={'Логин'} />

                    <Input value={password} onChange={(e)=>setPassword(e.target.value)} type={'password'} placeholder={'Пароль'} />
                </InputWrapper>



                <ButtonWrapper>
                    <MyButton clickHandler={doRequest}>
                        Войти
                    </MyButton>
                </ButtonWrapper>

            </AuthForm>

            <Illustration src={illustration}>

            </Illustration>


        </HolstAuth>
    );
});

export default AuthPage;