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
import PieChart from "../AdminInterfaces/PieChart/PieChart";
import HistoryTransaction from "../AdminInterfaces/HistoryTransaction/HistoryTransaction";


export const AccountComponent = ({fio = '', departamentName = '', src= ''})=>{
    return  <Account>
        <Picture src={src}>

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
}

const UserInterface = () => {
    return (
        <Container>
            <ProfileInfo>
                <AccountComponent fio = 'Иванов Иван Иванович' departamentName = 'Отдел маркетинга' src= '' />


                <Balance>

                    <Amount>
                        Баланс {(93389).toLocaleString() + ' '}₽
                    </Amount>
                </Balance>
            </ProfileInfo>

            <CardsBlock/>

            <PieChart />

            <HistoryTransaction />

        </Container>
    );
};

export default UserInterface;