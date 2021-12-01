import React from 'react';
import {Container} from "../AdminInterfaces/AdminInterfacesStyle";
import {Account, Amount, Balance, Departament, Fio, Picture, ProfileInfo, Textblock} from "./UserInterfaceStyle";


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
{/*
            <Cards>
                <H>Карты сотрудника</H>
                <Sliderblock>

                </Sliderblock>

                <CardInfo>
                    <TopMenuCard>

                    </TopMenuCard>
                    <Devider/>

                    <BottomMenuCard>

                    </BottomMenuCard>
                </CardInfo>

                <SpecialOffer>

                </SpecialOffer>
            </Cards>

            <ChartBlock>

            </ChartBlock>

            <HistoryOperationBlock>

            </HistoryOperationBlock>*/}

        </Container>
    );
};

export default UserInterface;