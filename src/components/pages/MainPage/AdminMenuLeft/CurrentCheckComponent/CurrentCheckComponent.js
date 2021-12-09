import React, {useContext, useEffect} from 'react';
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
import {observer} from "mobx-react-lite";
import {Context} from "../../../../../index";

const CurrentCheckComponent = observer(({isLink = true}) => {

    const {admin} = useContext(Context)

    useEffect(()=>{
        admin.getCurrentCheck().then(()=>{
            debugger
        }).catch(()=>{

        })
    }, [])

    return (
        <CurrentCheck>


            <AdminCardInfo>

                <CardInfoBlock>
                    <Left>
                        <P>
                            Номер
                        </P>

                        <Number>
                            {admin.currentCheck.account_number.map((el,index)=>
                                <NumberItem key={index}>
                                    {el}
                                </NumberItem>
                            )}
                        </Number>
                    </Left>

                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Right>
                        <P>
                            ВАЛЮТА
                        </P>

                        <Currency>
                            {admin.currentCheck.currency}
                        </Currency>
                    </Right>
                </CardInfoBlock>

                <CardInfoBlock>
                    <Left>
                        <P>
                            Баланс
                        </P>

                        <MoneyAdmin>
                            {admin.currentCheck.current_account.toLocaleString() + ' ₽'}
                        </MoneyAdmin>
                    </Left>


                    {isLink && <Alink to={ADMIN}>
                        Просмотр
                    </Alink>}
                </CardInfoBlock>
            </AdminCardInfo>

        </CurrentCheck>
    );
});

export default CurrentCheckComponent;