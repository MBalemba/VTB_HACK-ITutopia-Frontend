import React from 'react';
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



const Departament = () => {




    return (
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
                        Отдел маркетинга
                    </NameDepartament>

                    <AmountCards>
                        5 КАРТ
                    </AmountCards>
                </TextContent>
            </DepartamentBlock>

            <Employers>
                <EmployersContent>

                    <EmployerItem>
                        <Fio onMouseEnter={()=>{}} onMouseLeave={()=>{}}>
                            <div >
                                Иванов Иван Иванович
                            </div>

                            <ButtonDots >
                                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.89543 0 2 0Z" fill="#001A68" fill-opacity="0.2"/>
                                    <path d="M16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2C14 0.895431 14.8954 0 16 0Z" fill="#001A68" fill-opacity="0.2"/>
                                    <path d="M11 2C11 0.895431 10.1046 0 9 0C7.89543 0 7 0.895431 7 2C7 3.10457 7.89543 4 9 4C10.1046 4 11 3.10457 11 2Z" fill="#001A68" fill-opacity="0.2"/>
                                </svg>
                            </ButtonDots>
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
                                        {(18260).toLocaleString() +' ₽'}
                                    </Summ>
                                </LeftSideCard>

                                <Line>

                                </Line>


                                <Kategory>
                                    ТРАНСПОРТ
                                </Kategory>
                            </CardItem>
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
                                        {(18260).toLocaleString() +' ₽'}
                                    </Summ>
                                </LeftSideCard>

                                <Line>

                                </Line>


                                <Kategory>
                                    ТРАНСПОРТ
                                </Kategory>
                            </CardItem>

                        </Cards>
                    </EmployerItem>



                    <EmployerItem>
                        <Fio>
                            Иванов Иван Иванович
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
                                        {(18260).toLocaleString() +' ₽'}
                                    </Summ>
                                </LeftSideCard>

                                <Line>

                                </Line>


                                <Kategory>
                                    ТРАНСПОРТ
                                </Kategory>
                            </CardItem>

                        </Cards>
                    </EmployerItem>

                </EmployersContent>
            </Employers>

        </Container>
    );
};

export default Departament;