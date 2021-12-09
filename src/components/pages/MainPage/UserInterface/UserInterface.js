import React, {useContext, useEffect, useState} from 'react';
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
import {Ph} from "../AdminInterfaces/HistoryTransaction/HistoryTransactionStyle";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {Context} from "../../../../index";


export const AccountComponent = ({fio = '', departamentName = '', src = ''}) => {
    return <Account>
        <Picture src={src}>

        </Picture>

        <Textblock>
            <Fio>
                {fio}
            </Fio>
            <Departament>
                {departamentName}
            </Departament>
        </Textblock>

    </Account>
}

const UserInterface = observer(() => {

    let {id} = useParams();
    const {user} = useContext(Context)
    const [currentSlide, setCurrentSlide] = useState('0')
    console.log(currentSlide)

    useEffect(() => {
        if(id){
            user.getWorkerInfo(id).then(()=>{

            })
        }
    }, [id])

    useEffect(() => {
        if(id){
            user.getInfoOfCards(id).then(()=>{

            })
        }
    }, [id])

    return (
        <Container>
            <ProfileInfo>
                <AccountComponent fio={user.workerInfo.surname+' '+user.workerInfo.name +' '+ user.workerInfo.patronymic} departamentName={user.workerInfo.departmentType} src=''/>


                <Balance>

                    <Amount>
                        Баланс {(93389).toLocaleString() + ' '}₽
                    </Amount>
                </Balance>
            </ProfileInfo>

            <CardsBlock currentSlide={currentSlide} handleCurrentSlide={setCurrentSlide} cardsInfo={user.infoOfCards} />

            <PieChart/>

            <HistoryTransaction/>

        </Container>
    );
});

export default UserInterface;