import React from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN} from "../../../../utils/path";
import {
    AdminCardInfo, Alink,
    CardInfoBlock, Container,
    Currency, CurrentCheck,
    HeaderCheck,
    Left,
    MoneyAdmin,
    Number,
    NumberItem,
    P, Right
} from "./AdminMenuLeftStyle";


let activeStyle = {
    display: "none",
};

const AdminMenuLeft = () => {
    return (
        <Container>


            <CurrentCheck>
                <HeaderCheck>
                    Текущий счёт
                </HeaderCheck>

                <AdminCardInfo>

                    <CardInfoBlock>
                        <Left>
                            <P>
                                Номер
                            </P>

                            <Number>
                                <NumberItem>
                                    4241
                                </NumberItem>
                                <NumberItem>
                                    0666
                                </NumberItem>
                                <NumberItem>
                                    1337
                                </NumberItem>
                                <NumberItem>
                                    7640
                                </NumberItem>
                            </Number>
                        </Left>

                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Right>
                            <P>
                                ВАЛЮТА
                            </P>

                            <Currency>
                                RUB
                            </Currency>
                        </Right>
                    </CardInfoBlock>

                    <CardInfoBlock>
                        <Left>
                            <P>
                                Баланс
                            </P>

                            <MoneyAdmin>
                                {(2821650).toLocaleString() + ' ₽'}
                            </MoneyAdmin>
                        </Left>


                            <Alink to={ADMIN}>
                                Просмотр
                            </Alink>
                    </CardInfoBlock>
                </AdminCardInfo>

            </CurrentCheck>


{/*
            <EmployeesCards>

            </EmployeesCards>*/}


        </Container>
    );
};

export default AdminMenuLeft;