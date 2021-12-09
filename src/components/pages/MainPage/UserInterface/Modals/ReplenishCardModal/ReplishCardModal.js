import React, {useContext, useState} from 'react';
import {MiddleContent, ModalFooter} from "../../../../../common/Modal/ModalStyle";
import Card from "../../Cards/Card/Card";
import Select from "react-select";
import {AccountComponent} from "../../UserInterface";
import CreatableSelect from "react-select/creatable";
import {SearchC} from "../../../AdminMenuLeft/AdminMenuLeft";
import MyButton from "../../../../../common/Buttons/MyButton";
import Modal from "../../../../../common/Modal/Modal";
import {
    CurrentCheck,
    EmployersSelectBlock, Input, ItemNumber,
    NumberCard, P,
    Section1,
    Section2, SumToTransfer, SumToTransferBlock, SumToTransferText,
    TypeCardText
} from "./ReplishCardModalStyle";
import CurrentCheckComponent from "../../../AdminMenuLeft/CurrentCheckComponent/CurrentCheckComponent";
import CurrencyInput from "react-currency-input-field";
import NumberFormat from 'react-number-format';
import {InputWrapper} from "../../../AdminMenuLeft/NewEmployerModal/NewEmployerModalStyle";
import {Context, user} from "../../../../../../index";
import {observer} from "mobx-react-lite";


const ReplishCardModal = observer(({info,userId, active, setActive, fio, departamentName}) => {
    const {user} = useContext(Context)
    const [summ, setSumm] = useState('435345')
    return (
        <Modal headerName={'Перевод на карту сотрудника'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <Card data={info} />

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
                                    [info.card_number.slice(0, 4), info.card_number.slice(4, 8), info.card_number.slice(8, 12), info.card_number.slice(12, 16)].map(el=>{
                                        return <ItemNumber> {el}</ItemNumber>
                                    })
                                }
                            </NumberCard>
                        </TypeCardText>


                    </EmployersSelectBlock>
                </Section1>

                <Section2>
                    <CurrentCheck>
                        Текущий счёт
                    </CurrentCheck>
                    <CurrentCheckComponent isLink={false}/>



                    <SumToTransferBlock>
                        <SumToTransferText>
                            Сумма для перевода
                        </SumToTransferText>
                        <SearchC type={'number'} handleChange={(e)=>{setSumm(e.target.value)}} value={summ} placeholder={'Название отдела'}
                                 isSearchLogo={false}/>
                    </SumToTransferBlock>

                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton clickHandler={() => {
                    user.transferToCard({id: info.id, amount: summ }).then(()=>{
                        setActive(false)
                        setSumm('')

                        user.getInfoOfCards(userId).then(()=>{

                        })

                        user.getWorkerInfo(userId).then(()=>{

                        })


                    })

                }} disabled={false} width={'200px'}
                          height={'50px'}>
                    Перевести
                </MyButton>
            </ModalFooter>
        </Modal>)
});

export default ReplishCardModal;