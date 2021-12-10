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
    EmployersSelectBlock, Error, Input, ItemNumber,
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
import {TypeCardBlock} from "../../../AdminMenuLeft/NewCardModal/NewCardModalStyle";
import MaskedInput from "react-text-mask/dist/reactTextMask";
import {Search} from "../../../AdminMenuLeft/AdminMenuLeftStyle";
import './MAsk.css'

const ReplishCardModal = observer(({info, userId, active, setActive, fio, departamentName}) => {
    const {user, admin} = useContext(Context)
    const [summ, setSumm] = useState('')
    const [mask, setMask] = useState([/\d/])
    const [warning, setWarn] = useState(false)

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

        if(admin.currentCheck.current_account< value){
            setWarn(true)
        } else {
            setWarn(false)

        }


    }


    return (
        <Modal headerName={'Перевод на карту сотрудника'} active={active} setActive={setActive}>

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
                    <CurrentCheck>
                        Текущий счёт
                    </CurrentCheck>
                    <CurrentCheckComponent isLink={false}/>


                    <SumToTransferBlock>
                        <SumToTransferText>
                            Сумма для перевода
                        </SumToTransferText>
                        <SearchC input={
                            () => {
                                return <MaskedInput
                                    mask={mask}
                                    className={'mask'}
                                    value={summ}
                                    onChange={handleMask}
                                    guide={false}
                                    placeholder="сумма перевода"
                                />
                            }
                        } type={'number'} handleChange={(e) => {
                            setSumm(e.target.value)
                        }} value={summ} placeholder={'Название отдела'}
                                 isSearchLogo={false}/>
                        <Error here={warning}>
                            * Сумма перевода превышает ваштекущий счет
                        </Error>
                    </SumToTransferBlock>

                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton clickHandler={() => {
                    user.transferToCard({id: info.id, amount: summ}).then(() => {
                        setActive(false)
                        setSumm('')

                        user.getInfoOfCards(userId).then(() => {

                        })

                        user.getWorkerInfo(userId).then(() => {

                        })

                        admin.getAllTree().then(() => {

                        }).catch(() => {

                        })


                        admin.getCurrentCheck().then(()=>{

                        }).catch(()=>{

                        })


                    })

                }} disabled={warning || summ===''} width={'200px'}
                          height={'50px'}>
                    Перевести
                </MyButton>
            </ModalFooter>
        </Modal>)
});

export default ReplishCardModal;