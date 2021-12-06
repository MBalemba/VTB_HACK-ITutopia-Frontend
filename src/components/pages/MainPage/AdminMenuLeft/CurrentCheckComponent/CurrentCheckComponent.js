import React from 'react';
import {
    AdminCardInfo, Alink,
    CardInfoBlock,
    Currency, CurrentCheck,
    HeaderCheck,
    Left, MoneyAdmin,
    Number,
    NumberItem,
    P,
    Right
} from "./CurrentCheckComponentStyle";
import {ADMIN} from "../../../../../utils/path";

const CurrentCheckComponent = () => {
    return (
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
    );
};

export default CurrentCheckComponent;