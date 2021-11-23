import React from 'react';
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

const AuthPage = () => {



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
                    <Input type={'text'} placeholder={'Логин'} />

                    <Input type={'password'} placeholder={'Пароль'} />
                </InputWrapper>



                <ButtonWrapper>
                    <MyButton>
                        Войти
                    </MyButton>
                </ButtonWrapper>

            </AuthForm>

            <Illustration src={illustration}>

            </Illustration>


        </HolstAuth>
    );
};

export default AuthPage;