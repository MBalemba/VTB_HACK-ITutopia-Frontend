import React, {useContext} from 'react';
import cardVisaImg from './assets/image 1.png'
import {
    Block, Card, CardIco, CardNumber, Category,
    ContainerHistory, Currency,
    Data, Departament, Divider, Fio,
    Ico, IcoDown, IcoDownStyle, IcoPerson, IcoStyle, IcoUp, Name, PaginationBlock, Person,
    Ph, Picture, Price, PriceValue, TextBlock, Time,
    TransactionFIRM,
    TransactionItems,
    TrItem
} from "./HistoryTransactionStyle";
import {objIcons} from "../../../../../assets/SpentMoneyServicesIcons/ObjIcons";
import MyButton from "../../../../common/Buttons/MyButton";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../../index";


export const HistoryTransaction = observer(({isHeader = true, data: information , paginate = false, paginateClick=()=>{}}) => {
    const {admin} = useContext(Context)
    return (
        <ContainerHistory>

            {isHeader && <Ph>
                {information?.length === 0 ? 'У вас нет истории операции по таким критериям' : 'История последних операций'}
            </Ph>}


            {
                information?.map(({date, group}, index) => <Block key={index}>
                        <Data>
                            {date}
                        </Data>

                        <TransactionItems>


                            {

                                group.map((
                                    {
                                        card_number,
                                        currency,
                                        date,
                                        fio,
                                        name,
                                        payment_system,
                                        purpose,
                                        time,
                                        type,
                                        value,
                                    }, index
                                    ) => <React.Fragment key={index}>
                                        <TrItem>
                                            <TransactionFIRM>

                                                <IcoStyle>
                                                    {Number(value) < 0 ?
                                                        <IcoDown/>
                                                        : <IcoUp/>
                                                    }

                                                </IcoStyle>
                                                <Picture>

                                                    {objIcons[purpose] ? objIcons[purpose] : objIcons.Others}
                                                </Picture>

                                                <TextBlock>
                                                    <Name>
                                                        {purpose}
                                                    </Name>

                                                    <Time>
                                                        {time}, {date}
                                                    </Time>
                                                </TextBlock>
                                            </TransactionFIRM>

                                            <Person>
                                                <IcoPerson>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12.7974" cy="12" r="12" fill="#0057FF" fill-opacity="0.1"/>
                                                        <path
                                                            d="M12.5472 6.16602C9.38495 6.16602 6.71387 8.8371 6.71387 11.9993C6.71387 15.1616 9.38495 17.8327 12.5472 17.8327C15.7095 17.8327 18.3805 15.1616 18.3805 11.9993C18.3805 8.8371 15.7095 6.16602 12.5472 6.16602ZM12.5472 9.08268C13.5546 9.08268 14.2972 9.82468 14.2972 10.8327C14.2972 11.8407 13.5546 12.5827 12.5472 12.5827C11.5404 12.5827 10.7972 11.8407 10.7972 10.8327C10.7972 9.82468 11.5404 9.08268 12.5472 9.08268ZM9.5687 14.783C10.092 14.013 10.9646 13.4997 11.9639 13.4997H13.1305C14.1304 13.4997 15.0025 14.013 15.5257 14.783C14.7802 15.581 13.7226 16.0827 12.5472 16.0827C11.3718 16.0827 10.3142 15.581 9.5687 14.783Z"
                                                            fill="#0057FF"/>
                                                    </svg>

                                                </IcoPerson>

                                                <Fio>
                                                    {fio}
                                                </Fio>
                                            </Person>

                                            <Departament>
                                                {name}
                                            </Departament>

                                            <Category>
                                                {type}
                                            </Category>

                                            <Card>
                                                <CardIco src={cardVisaImg}>
                                                </CardIco>
                                                <CardNumber>
                                                    *{Number(card_number) % 10000}
                                                </CardNumber>
                                            </Card>

                                            <Price>
                                                <PriceValue>
                                                    {(value).toLocaleString()}
                                                </PriceValue>

                                                <Currency>
                                                    {currency}
                                                </Currency>

                                            </Price>

                                        </TrItem>
                                        <Divider/>
                                    </React.Fragment>
                                )

                            }

                        </TransactionItems>

                    </Block>
                )
            }

            {
                paginate && <PaginationBlock>
                    <MyButton clickHandler={paginateClick} width={'240px'} height={'40px'}>
                        Загрузить еще {admin.currentPage}
                    </MyButton>

                </PaginationBlock>

            }


        </ContainerHistory>

    )
});

export default HistoryTransaction;