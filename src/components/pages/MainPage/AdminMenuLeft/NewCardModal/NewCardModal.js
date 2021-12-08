import React, {useState} from 'react';
import Modal from "../../../../common/Modal/Modal";
import {MiddleContent, ModalContent, ModalFooter} from "../../../../common/Modal/ModalStyle";
import MyButton from "../../../../common/Buttons/MyButton";
import Card from "../../UserInterface/Cards/Card/Card";
import {
    EmployersSelectBlock,
    Section1,
    Section2,
    SelectWrapper,
    TypeCardBlock,
    TypeCardText
} from "./NewCardModalStyle";
import Select from "react-select";
import {AccountComponent} from "../../UserInterface/UserInterface";
import {SearchC} from "../AdminMenuLeft";




const employers = [
    { value: 'none', label: 'не выбрано' },
    { value: 'Balemba Valera Alexndrovic', label: 'Balemba Valera Alexndrovich' },
    { value: 'Gnida Valera Alexndrovich', label: 'Gnida Valera Alexndrovich' },
    { value: 'Balemba Sasha Alexndrovich', label: 'Balemba Sasha Alexndrovich' },
];
const typeCard = [
    { value: 'none', label: 'не выбрано' },
    { value: 'ТРАНСПОРТ', label: 'КОМАНДИРОВКА' },
    { value: 'ЕДА И СУПЕРМАРКЕТЫ', label: 'ЕДА И СУПЕРМАРКЕТЫ' },
    { value: 'ЛИЧНАЯ', label: 'ЛИЧНАЯ' },
];


const NewCardModal = ({active, setActive}) => {

    const [selectedEmployer, setSelectedEmployer] = useState(employers[0]);
    const [selectedType, setSelectedType] = useState(null);
    const [purposeCard, setCardPurpose] = useState('')

    const handleChangeInput = (e)=>{
        setCardPurpose(e.target.value)
    }

    return (
        <Modal headerName={'Выпуск новой карты'} active={active} setActive={setActive}>

            <MiddleContent>
                <Section1>
                    <Card isEmpty={true}/>

                    <EmployersSelectBlock>
                        <SelectWrapper>
                            <Select
                                className={'ads'}
                                defaultValue={employers[0]}
                                classNamePrefix="menu_admin"
                                placeholder = 'Категория'
                                onChange={(data)=>{setSelectedEmployer(data) }}
                                options={employers}
                            />
                        </SelectWrapper>

                        <AccountComponent fio={selectedEmployer.value === 'none' ? 'Ф.И.О.' : selectedEmployer.label.split(' ').map(el=>el[0].toUpperCase()).join('.')} departamentName='отдел' src='' />

                    </EmployersSelectBlock>
                </Section1>

                <Section2>
                    <TypeCardBlock>
                         <TypeCardText>
                             Выберите тип карты
                         </TypeCardText>

                        <SelectWrapper>
                            <Select
                                className={'ads'}
                                defaultValue={typeCard[0]}
                                classNamePrefix="menu_admin"
                                placeholder = 'Категория'
                                onChange={(data)=>{setSelectedType(data)}}
                                options={typeCard}
                            />
                        </SelectWrapper>


                        <SearchC handleChange={handleChangeInput} value={purposeCard} placeholder={'назначение карты'} isSearchLogo={false}/>
                    </TypeCardBlock>
                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={()=>setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton width={'200px'} height={'50px'}>
                    Выполнить перевод
                </MyButton>
            </ModalFooter>
        </Modal>
    );
};

export default NewCardModal;