import React, {useContext, useEffect, useState} from 'react';
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
import CreatableSelect from "react-select/creatable";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../../index";


const NewCardModal = observer(({active, setActive}) => {
    const {admin} = useContext(Context)

    let [typeCard, setTypeCard] = useState([
        {value: 'Транспорт', label: 'Транспорт'},
        {value: 'Еда и супермаркеты', label: 'Еда и супермаркеты'},
        {value: 'Личная', label: 'Личная'},
    ]);
    const [employers, setEmployers] = useState([
        {value: '', label: 'не выбрано'}
    ]);
    useEffect(() => {
        setEmployers([{value: '', label: 'не выбрано'}, ...admin.allWorkers.map(el => ({
            value: el.id,
            label: el.surname + ' ' + el.name + ' ' + el.patronymic
        }))])

    }, [admin.allWorkers.length])

    const [selectedEmployer, setSelectedEmployer] = useState(employers[0]);
    const [selectedType, setSelectedType] = useState(typeCard[0]);
    const [purposeCard, setCardPurpose] = useState('')

    const handleChangeInput = (e) => {
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
                                placeholder='Категория'
                                onChange={(data) => {
                                    setSelectedEmployer(data)
                                }}
                                options={employers}
                            />
                        </SelectWrapper>

                        <AccountComponent
                            fio={selectedEmployer.value === '' ? 'Ф.И.О.' : selectedEmployer.label.split(' ').map((el, index) => index == 0 ? el + ' ' : (el[0] + '.')).join('')}
                            departamentName={admin.allDepartments.find(el => el.id == admin.allWorkers.find((el) => el.id === selectedEmployer.value)?.department_id)?.name || 'Отдел'}
                            src=''/>

                    </EmployersSelectBlock>
                </Section1>

                <Section2>
                    <TypeCardBlock>
                        <TypeCardText>
                            Выберите тип карты
                        </TypeCardText>

                        <SelectWrapper>
                            <CreatableSelect

                                className={'ads'}
                                defaultValue={selectedType}
                                classNamePrefix="menu_admin"
                                placeholder='Категория'
                                onChange={(data) => {
                                    setSelectedType(data)
                                }}
                                onCreateOption={(el) => {
                                    setTypeCard([...typeCard, {value: el, label: el}])
                                }}
                                options={typeCard}
                            />
                        </SelectWrapper>


                        <SearchC handleChange={handleChangeInput} value={purposeCard} placeholder={'назначение карты'}
                                 isSearchLogo={false}/>
                    </TypeCardBlock>
                </Section2>
            </MiddleContent>

            <ModalFooter>
                <MyButton clickHandler={() => setActive(false)} bgc={'#8E8E8E'} width={'108px'} height={'50px'}>
                    Отмена
                </MyButton>

                <MyButton clickHandler={() => {
                    let data = {
                        "id_worker": selectedEmployer.value,
                        "type": selectedType.value,
                        "purpose_of_creation": purposeCard.trim(),
                    }
                    admin.addCard(data).then(()=>{
                        setActive(false)

                        admin.getAllTree().then(() => {

                        }).catch(() => {

                        })
                    })

                }} disabled={purposeCard.trim() === '' || selectedEmployer.value === ''} width={'200px'}
                          height={'50px'}>
                    Выпуск карты
                </MyButton>
            </ModalFooter>
        </Modal>
    );
});

export default NewCardModal;