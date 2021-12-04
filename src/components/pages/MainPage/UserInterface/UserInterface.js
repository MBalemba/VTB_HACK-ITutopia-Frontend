import React from 'react';
import {Container} from "../AdminInterfaces/AdminInterfacesStyle";
import {
    Account,
    Amount,
    Balance, BottomMenuCard, ButtonsControl, CardInfo,
    Cards, CurrentCardText,
    Departament, Divider,
    Fio,
    H, LeftInfoTopMenu, MenuItem,
    Picture,
    ProfileInfo, Sliderblock, SpecialOffer, Status,
    Textblock, TopMenuCard
} from "./UserInterfaceStyle";
import SliderCards from "./Cards/SliderCards/SliderCards";
import CardsBlock from "./Cards/Cards";


const UserInterface = () => {
    return (
        <Container>
            <ProfileInfo>
                <Account>
                    <Picture>

                    </Picture>

                    <Textblock>
                        <Fio>
                            Иванов Иван Иванович
                        </Fio>
                        <Departament>
                            Отдел маркетинга
                        </Departament>
                    </Textblock>

                </Account>


                <Balance>

                    <Amount>
                        Баланс {(93389).toLocaleString() + ' '}₽
                    </Amount>
                </Balance>
            </ProfileInfo>

            <CardsBlock/>

            {/*
            <ChartBlock>

            </ChartBlock>

            <HistoryOperationBlock>

            </HistoryOperationBlock>*/}

        </Container>
    );
};

export default UserInterface;