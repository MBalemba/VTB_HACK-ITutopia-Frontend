import React, {useContext, useState} from 'react';
import {MiddleContent, ModalFooter} from "../../../../../common/Modal/ModalStyle";
import {
    EmployersSelectBlock,
    ItemNumber,
    NumberCard,
    P,
    Section1, Section2, SumToTransferText,
    TypeCardText
} from "../ReplenishCardModal/ReplishCardModalStyle";
import Card from "../../Cards/Card/Card";
import {AccountComponent} from "../../UserInterface";
import {Checkbox, Label, SumToTransferBlock} from "../LomitModal/LimitModalStyle";
import {SearchC} from "../../../AdminMenuLeft/AdminMenuLeft";
import MaskedInput from "react-text-mask";
import MyButton from "../../../../../common/Buttons/MyButton";
import Modal from "../../../../../common/Modal/Modal";
import {Context} from "../../../../../../index";

const TemporaryModal = ({info, cardId, userId, active, setActive, fio, departamentName}) => {
    const {user, admin} = useContext(Context)
    const [days, setDays] = useState('')
    const [summ, setSumm] = useState('')
    const [check, setCheck] = useState(false)
    const [mask, setMask] = useState([/\d/])

    return (
        <Modal headerName={'Временная блокировка карты'} active={active} setActive={setActive}>

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
                            Введите последнии 4 цифры карты
                        </SumToTransferText>
                        <SearchC
                            input={
                                () => {
                                    return <MaskedInput
                                        mask={[/\d/,/\d/,/\d/,/\d/]}
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


                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton  clickHandler={() => {
                    user.lockUnlockCard(cardId).then(()=>{
                        setActive(false)
                    }).catch(()=>{

                    })

                    admin.getAllTree().then(() => {

                    }).catch(() => {

                    })


                }} disabled={Number(days) !== (info.card_number%10000)} width={'200px'}
                          height={'50px'}>
                    Подтвердить блокировку
                </MyButton>
            </ModalFooter>
        </Modal>
    );
};

export default TemporaryModal;