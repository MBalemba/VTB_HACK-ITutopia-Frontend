import React from 'react';
import SliderCards from "./SliderCards/SliderCards";
import {
    Blocker,
    BottomMenuCard,
    ButtonsControl, ButtonWrapper,
    CardInfo,
    Cards, ChangeThis,
    CurrentCardText, Divider, Dot,
    H, Item, Key,
    LeftInfoTopMenu, Loader,
    MenuItem, ProgressBar,
    Sliderblock, SpecialOffer,
    Status, Time,
    TopMenuCard, Value
} from "./CardsStyle";
import Card from "./Card/Card";
import MyButton from "../../../../common/Buttons/MyButton";

const CardsBlock = ({handleCurrentSlide, cardsInfo , currentSlide}) => {
    console.log( cardsInfo)

    return (
            <Cards>
                <H>Карты сотрудника</H>

                {cardsInfo.length!==0 &&
                <Sliderblock>

                <SliderCards handleCurrentSlide={handleCurrentSlide} id={'mainpage_1'} render={() =>
                    <>

                        {cardsInfo?.map((el, index) =>
                            <div key={index} className={"slide"}>
                                <Card data={el} />
                            </div>
                        )}

                {/*<div className="slide slide-3">
                    <Card data={cardsInfo[0]}/>
                </div>
                <div className="slide slide-1">
                    <Card data={cardsInfo[1]}/>
                </div>*/}
               {/* <div className="slide slide-2">
                    <Card/>
                </div>
                <div className="slide slide-4">
                    <Card/>
                </div>*/}
                    </>
                }/>

                    <CurrentCardText>
                    ТЕКУЩАЯ
                    </CurrentCardText>
                    </Sliderblock>

                    }

                <CardInfo>
                    <TopMenuCard>
                        <LeftInfoTopMenu>
                            <MenuItem>
                                <p>
                                    Статус
                                </p>
                                <Status>
                                    {cardsInfo[currentSlide].status}
                                </Status>
                            </MenuItem>

                            <MenuItem>
                                <p>
                                    Баланс
                                </p>
                                <Status>
                                    {(cardsInfo[currentSlide].account).toLocaleString()+' ₽'}
                                </Status>
                            </MenuItem>

                            <MenuItem>
                                <p>
                                    Тип
                                </p>

                                <Status>
                                    {cardsInfo[currentSlide].type}
                                </Status>
                            </MenuItem>

                            <MenuItem>
                                <p>
                                    Назначение
                                </p>

                                <Status>
                                    {cardsInfo[currentSlide].purpose_of_creation}
                                </Status>
                            </MenuItem>


                        </LeftInfoTopMenu>

                        <ButtonsControl>
                            <ButtonWrapper>
                                <MyButton>
                                    Пополнить
                                </MyButton>
                            </ButtonWrapper>

                            <Time>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1.05C4.6163 1.05 1.05 4.6163 1.05 9C1.05 13.3837 4.6163 16.95 9 16.95C13.3837 16.95 16.95 13.3837 16.95 9C16.95 4.6163 13.3837 1.05 9 1.05ZM9 15.225C5.56776 15.225 2.775 12.4322 2.775 9C2.775 5.56776 5.56776 2.775 9 2.775C12.4322 2.775 15.225 5.56776 15.225 9C15.225 12.4322 12.4322 15.225 9 15.225Z" fill="white" stroke="white" stroke-width="0.15"/>
                                    <path d="M10.031 5.625V5.55H9.95602H9H8.925V5.625V9.12262V9.14735L8.93971 9.16723L10.5138 11.2946L10.5741 11.3761L10.6344 11.2946L11.3103 10.3811L11.3433 10.3365L11.3103 10.2919L10.031 8.56297V5.625Z" fill="white" stroke="white" stroke-width="0.15"/>
                                </svg>
                            </Time>

                            <Blocker>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM14 8C14.0018 6.75399 13.6139 5.53861 12.8907 4.524L4.524 12.8907C5.42161 13.5287 6.47749 13.9073 7.57598 13.9851C8.67447 14.0629 9.77319 13.8369 10.7518 13.3319C11.7304 12.8268 12.5511 12.0622 13.124 11.1217C13.697 10.1812 14 9.10124 14 8ZM11.476 3.10933C10.3203 2.28776 8.91097 1.90204 7.49796 2.02058C6.08495 2.13913 4.75959 2.75428 3.75694 3.75694C2.75428 4.75959 2.13913 6.08495 2.02058 7.49796C1.90204 8.91097 2.28776 10.3203 3.10933 11.476L11.476 3.10933Z" fill="white"/>
                                </svg>
                            </Blocker>
                        </ButtonsControl>
                    </TopMenuCard>

                    <Divider/>

                    <BottomMenuCard>
                        <Item>
                            <Key>
                                Лимит
                            </Key>
                                <Dot>

                                </Dot>
                            <Value>
                                {(95000).toLocaleString() +' ₽'}
                            </Value>
                        </Item>

                        <Item>
                            <Key>
                                Остаток
                            </Key>
                                <Dot>

                                </Dot>
                            <Value>
                                {(12740).toLocaleString() +' ₽'}
                            </Value>
                        </Item>

                        <Item>
                            <Key>
                                Срок
                            </Key>
                                <Dot>

                                </Dot>
                            <Value>
                                20 дней
                            </Value>
                        </Item>

                        <ProgressBar>
                            <Loader percent={'23'}>

                            </Loader>
                        </ProgressBar>

                        <ChangeThis>
                            Изменить
                        </ChangeThis>

                    </BottomMenuCard>
                </CardInfo>

                <SpecialOffer>

                </SpecialOffer>
            </Cards>
    );
};

export default CardsBlock;