import React from 'react';
import {
    AmountCards, CardItem, Cards,
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