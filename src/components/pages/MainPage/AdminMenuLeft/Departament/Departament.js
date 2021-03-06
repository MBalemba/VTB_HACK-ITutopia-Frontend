import React, {useState} from 'react';
import {
    AmountCards, ButtonDots, CardItem, Cards,
    Container,
    DepartamentBlock, Dot, EmployerItem,
    Employers, EmployersContent, Fio,
    Ico, Kategory, LeftSideCard, Line,
    NameDepartament, Summ,
    TextContent
} from "./DepartamentStyle";
import {Card, CardIco, CardNumber} from "../../AdminInterfaces/HistoryTransaction/HistoryTransactionStyle";
import cardVisaImg from "../../AdminInterfaces/HistoryTransaction/assets/image 1.png";
import {Navigate} from "react-router-dom";
import {ADMIN} from "../../../../../utils/path";


const Item = ({name, patronymic, surname, id, cards}) => {
    const [activeMy, setActive] = useState('false');
    console.log(activeMy)


    return (
        <EmployerItem onClick={(e)=>{
            if(cards.length===0){
                e.preventDefault()
            }
        }} style={({ isActive }) =>
        {isActive? setActive(true) :setActive(false)

        return ''
        }
        } class to={'../home/user/'+id}>

                <Fio onMouseEnter={() => {
                }} onMouseLeave={() => {
                }}>
                    <div>
                        {surname+ ' '+ name + ' '+ patronymic}
                    </div>


                </Fio>
                {cards.length!==0 &&
                <Cards>
                    {cards.map(el =>{

                            let color = '#32C665';
                            switch (el.status) {
                                case 'ACTIVE':
                                    color = '#32C665';
                                case 'TEMPORARY BLOCKING':
                                    color = '#A9A9A9';
                                case 'BLOCKING':
                                    color = '#F64E4E';
                            }

                            return (

                                <CardItem key={el.id}>
                                    <LeftSideCard>
                                        <Dot color={el.status==='ACTIVE'? '#32C665': (el.status==='TEMPORARY BLOCKING'? '#A9A9A9' :'#F64E4E')}>

                                        </Dot>

                                        <Card>
                                            <CardIco src={cardVisaImg}>
                                            </CardIco>
                                            <CardNumber>
                                                *{el.card_number.slice(12,16)}
                                            </CardNumber>
                                        </Card>

                                        <Summ>
                                            {(el.account).toLocaleString() + ' ???'}
                                        </Summ>
                                    </LeftSideCard>

                                    <Line>

                                    </Line>


                                    <Kategory>
                                        {el.type}
                                    </Kategory>
                                </CardItem>
                            )
                        }

                    )}

                    {/* <CardItem>
                    <LeftSideCard>
                        <Dot color={'#32C665'}>

                        </Dot>

                        <Card>
                            <CardIco src={cardVisaImg}>
                            </CardIco>
                            <CardNumber>
                                *7640
                            </CardNumber>
                        </Card>

                        <Summ>
                            {(18260).toLocaleString() + ' ???'}
                        </Summ>
                    </LeftSideCard>

                    <Line>

                    </Line>


                    <Kategory>
                        ??????????????????
                    </Kategory>
                </CardItem>*/}

                </Cards>
                }

        </EmployerItem>

    )
}

const Departament = ({name = '', amountOfCards = '', workers = []}) => {




    return (
        <>
            <Container>
                <DepartamentBlock>
                    <Ico>
                        <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7" y="16" width="42" height="27" rx="7" fill="#0057FF" fill-opacity="0.6"/>
                            <rect width="55" height="36" rx="7" fill="#0057FF"/>
                            <circle cx="41" cy="27" r="2" fill="white"/>
                            <circle cx="46" cy="27" r="2" fill="white"/>
                            <circle cx="36" cy="27" r="2" fill="white"/>
                        </svg>
                    </Ico>
                    <TextContent>
                        <NameDepartament>
                            {name}
                        </NameDepartament>

                        <AmountCards>
                            {amountOfCards + ' '} ????????
                        </AmountCards>
                    </TextContent>
                </DepartamentBlock>

                <Employers>
                    {workers.length !==0 &&
                    <EmployersContent>
                        {workers.map(el =>
                            <Item name={el.name} patronymic={el.patronymic} surname={el.surname} id={el.id} cards={el.cards} />
                        )}


                        {/*<EmployerItem>
                        <Fio>
                            ???????????? ???????? ????????????????
                        </Fio>
                        <Cards>
                            <CardItem>
                                <LeftSideCard>
                                    <Dot color={'#32C665'}>

                                    </Dot>

                                    <Card>
                                        <CardIco src={cardVisaImg}>
                                        </CardIco>
                                        <CardNumber>
                                            *7640
                                        </CardNumber>
                                    </Card>

                                    <Summ>
                                        {(18260).toLocaleString() + ' ???'}
                                    </Summ>
                                </LeftSideCard>

                                <Line>

                                </Line>


                                <Kategory>
                                    ??????????????????
                                </Kategory>
                            </CardItem>

                        </Cards>
                    </EmployerItem>*/}

                    </EmployersContent>
                    }


                </Employers>

            </Container>
            {workers.length ===0 && <br/>}
            </>

    );
};

export default Departament;