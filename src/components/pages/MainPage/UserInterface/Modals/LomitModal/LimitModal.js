import React, {useContext, useState} from 'react';
import {MiddleContent, ModalFooter} from "../../../../../common/Modal/ModalStyle";
import {
    CurrentCheck,
    EmployersSelectBlock, Error,
    ItemNumber,
    NumberCard,
    P,
    Section1, Section2, SumToTransferText,
    TypeCardText
} from "../ReplenishCardModal/ReplishCardModalStyle";
import Card from "../../Cards/Card/Card";
import {AccountComponent} from "../../UserInterface";
import CurrentCheckComponent from "../../../AdminMenuLeft/CurrentCheckComponent/CurrentCheckComponent";
import {SearchC} from "../../../AdminMenuLeft/AdminMenuLeft";
import MaskedInput from "react-text-mask";
import MyButton from "../../../../../common/Buttons/MyButton";
import Modal from "../../../../../common/Modal/Modal";
import {Checkbox, Label, SumToTransferBlock} from "./LimitModalStyle";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../../../index";

const LimitModal = observer(({info, cardId, userId, active, setActive, fio, departamentName}) => {


    const {user} = useContext(Context)
    const [days, setDays] = useState('')
    const [summ, setSumm] = useState('')
    const [check, setCheck] = useState(false)
    const [mask, setMask] = useState([/\d/])
    const handleMask = (e) => {

        let value = (e.target.value.match(/\d/g)) || []
        // console.log( Number(value.join('')).toLocaleString())
        value = value.join('')
        let arrmask = []
        for (let i of Number(value).toLocaleString()) {

            let flag = /\d/.test(i)
            console.log(flag)
            if (flag) {
                arrmask.push(/\d/)
            } else {
                arrmask.push(' ')
            }
        }
        arrmask.push(/\d/)
        setMask(arrmask)
        setSumm(value)


    }

    return (
        <Modal headerName={'Выставить лимит'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <Card data={info}/>

                    <EmployersSelectBlock>


                        <AccountComponent
                            fio={fio}
                            departamentName={departamentName}
                            src=''/>

                        <TypeCardText>
                            <P>
                                Номер карты
                            </P>
                            <NumberCard>
                                {
                                    [info.card_number.slice(0, 4), info.card_number.slice(4, 8), info.card_number.slice(8, 12), info.card_number.slice(12, 16)].map(el => {
                                        return <ItemNumber> {el}</ItemNumber>
                                    })
                                }
                            </NumberCard>
                        </TypeCardText>


                    </EmployersSelectBlock>
                </Section1>

                <Section2>

                    <SumToTransferBlock>
                        <SumToTransferText>
                            Количество дней
                        </SumToTransferText>
                        <SearchC
                            input={
                                () => {
                                   return <MaskedInput
                                        mask={[/\d/,/\d/,/\d/]}
                                        className={'mask'}
                                        value={days}
                                        onChange={(e) => setDays(e.target.value)}
                                        guide={false}

                                    />
                                }
                            }

                            isSearchLogo={false}/>

                        {/* <Error here={warning}>
                            * Сумма перевода превышает ваштекущий счет
                        </Error>*/}
                    </SumToTransferBlock>


                    <SumToTransferBlock>


                        <SumToTransferText>
                            Сумма
                        </SumToTransferText>
                        <SearchC
                            input={
                                () => {
                                    return <MaskedInput
                                        mask={mask}
                                        className={'mask'}
                                        value={summ}
                                        onChange={handleMask}
                                        guide={false}

                                    />
                                }
                            }

                            isSearchLogo={false}/>
                        {/* <Error here={warning}>
                            * Сумма перевода превышает ваштекущий счет
                        </Error>*/}
                    </SumToTransferBlock>


                    <Label onClick={() => setCheck(!check)}>
                        <Checkbox type="checkbox"/>
                        Автоматически возобновлять лимит по истечению указанного срока
                    </Label>


                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton clickHandler={() => {

                    const data = {
                        autoUpdate: check,
                        card_id: cardId,
                        limit: summ,
                        term: days,
                    }

                    user.setLimitOnCard(data).then(()=>{
                        setActive(false)
                    })


                }} disabled={days==='' || summ===''} width={'200px'}
                          height={'50px'}>
                    Выставить лимит
                </MyButton>
            </ModalFooter>
        </Modal>
    );
}) ;

export default LimitModal;