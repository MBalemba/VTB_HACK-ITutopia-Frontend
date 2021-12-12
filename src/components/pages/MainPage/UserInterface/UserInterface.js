import React, {useContext, useEffect, useState} from 'react';
import {BlockToFull, Container, ContainerTransaction} from "../AdminInterfaces/AdminInterfacesStyle";
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
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Context} from "../../../../index";
import {ADMIN} from "../../../../utils/path";
import MyButton from "../../../common/Buttons/MyButton";


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
    const navigate = useNavigate()

    useEffect(() => {

            user.getWorkerInfo(id).then(()=>{

            })

    }, [id])

    useEffect(() => {


            user.changeIsFetching({isFetchCardsInfo: true})
            user.getInfoOfCards(id).then(()=>{

                if(user.infoOfCards.length === 0) {
                    navigate('../'+ADMIN)
                    user.CreateInitialCardObj()
                } else{
                    user.changeIsFetching({isFetchCardsInfo: false})
                }

            })

    }, [id])



    useEffect(() => {
        user.topSpendingCategoriesUser({worker_id: id})
            .then(() => {

                }
            ).catch(() => {

        })
    }, [id])

    useEffect(() => {

      
        user.transactionHistoryUser({worker_id: id})
            .then(() => {

                }
            ).catch(() => {

        })
    }, [id])


    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [id])



    if(!id){
        return <Navigate to='../admin' />
    }

    console.log("133" + JSON.stringify(user.getTopSpendingCategories))

    return (
        <Container>

            {
                !user.isFetching.isFetchCardsInfo ?
                    <>
                        <ProfileInfo>
                            <AccountComponent fio={user.workerInfo.surname+' '+user.workerInfo.name +' '+ user.workerInfo.patronymic} departamentName={user.workerInfo.departmentType} src=''/>


                            <Balance>

                                <Amount>
                                    Баланс {(user.workerInfo.account).toLocaleString() + ' '}₽

                                </Amount>
                            </Balance>
                        </ProfileInfo>



                        {user.infoOfCards.length!==0 && <CardsBlock userId={id} departamentName={user.workerInfo.departmentType} fio={user.workerInfo.surname+' '+user.workerInfo.name +' '+ user.workerInfo.patronymic} currentSlide={currentSlide} handleCurrentSlide={setCurrentSlide} cardsInfo={user.infoOfCards} />}
                        { user.getTopSpendingCategories && user.getTopSpendingCategories.maxSum > 0 ? <PieChart topCategories={user.getTopSpendingCategories} /> : null }

                        <ContainerTransaction>
                            <HistoryTransaction data={user.getTransactionHistory} />
                        </ContainerTransaction>

{/*
                        <BlockToFull>
                            <MyButton height={'40px'} width={'240px'} clickHandler={(e)=>{navigate("../../full/userHome/"+id)}}>
                                Открыть историю транзакций
                            </MyButton>
                        </BlockToFull>*/}

                    </>
                :
                    <>load</>

            }


        </Container>
    );
});

export default UserInterface;