import React, {forwardRef, useState} from 'react';
import {
    AdminLeft,
    AdminRight,
    Arrow, ButtonDate, ButtonWrapper,
    Container,
    DatePickerBlock, DonutSection,
    FirstSection,
    GoBack,
    GoBackText,
    H, HeaderSectionHistory, HistorySection, MenuSection, SelectItem, SelectWrapper, TextDatePicker
} from "./AdminFullPageStyle";
import CurrentCheckComponent from "../../MainPage/AdminMenuLeft/CurrentCheckComponent/CurrentCheckComponent";
import {ProfileInfo} from "../../MainPage/UserInterface/UserInterfaceStyle";
import {AccountComponent} from "../../MainPage/UserInterface/UserInterface";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WeekChart from "../../MainPage/AdminInterfaces/WeekChart/WeekChart";
import PieChart from "../../MainPage/AdminInterfaces/PieChart/PieChart";
import {SearchC} from "../../MainPage/AdminMenuLeft/AdminMenuLeft";
import Select from "react-select";
import MyButton from "../../../common/Buttons/MyButton";
import HistoryTransaction from "../../MainPage/AdminInterfaces/HistoryTransaction/HistoryTransaction";



export const CustomDatePicker = forwardRef(({ value ='', myText, onClick }, ref) =>
    {
        console.log(myText)

        return (
            <ButtonDate className="example-custom-input" onClick={onClick} ref={ref}>
                <TextDatePicker>
                    {value===''? myText : value}
                </TextDatePicker>

                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0.5L7 5.5L12 0.499999L14 1.5L7 8.5L-3.0598e-07 1.5L2 0.5Z" fill="#001A68" fill-opacity="0.45"/>
                </svg>
            </ButtonDate>
        )
    }
);



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const AdminFullPage = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Container>
            <FirstSection>
                <AdminLeft>

                    <GoBack>
                        <Arrow>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7.3193C16 7.05261 15.8947 6.79685 15.7071 6.60828C15.5196 6.4197 15.2653 6.31376 15.0001 6.31376H3.41541L7.70893 1.99802C7.89668 1.80921 8.00216 1.55312 8.00216 1.2861C8.00216 1.01908 7.89668 0.762995 7.70893 0.574183C7.52117 0.385371 7.26653 0.279297 7.00101 0.279297C6.73548 0.279297 6.48084 0.385371 6.29308 0.574183L0.293755 6.60738C0.200639 6.70079 0.126761 6.81175 0.076354 6.93391C0.0259466 7.05607 0 7.18704 0 7.3193C0 7.45156 0.0259466 7.58252 0.076354 7.70468C0.126761 7.82685 0.200639 7.93781 0.293755 8.03122L6.29308 14.0644C6.48084 14.2532 6.73548 14.3593 7.00101 14.3593C7.26653 14.3593 7.52117 14.2532 7.70893 14.0644C7.89668 13.8756 8.00216 13.6195 8.00216 13.3525C8.00216 13.0855 7.89668 12.8294 7.70893 12.6406L3.41541 8.32483H15.0001C15.2653 8.32483 15.5196 8.21889 15.7071 8.03032C15.8947 7.84174 16 7.58598 16 7.3193Z" fill="#001A68"/>
                            </svg>
                        </Arrow>

                        <GoBackText>
                            Назад
                        </GoBackText>

                    </GoBack>

                    <CurrentCheckComponent isLink={false} />


                    <AccountComponent fio = 'Иванов Иван Иванович' departamentName = 'Владелец счета' src= '' />


                </AdminLeft>


                <AdminRight>
                    <H>График расходов</H>

                    <DatePickerBlock>
                        <DatePicker
                            selected={startDate}
                            maxDate={endDate}
                            onChange={(date) => {console.log(date.getFullYear()+'-'+date.getMonth() +'-'+(Math.floor(date.getDate()/10)<1?'0'+ date.getDate(): date.getDate())) ;setStartDate(date)}}
                            customInput={<CustomDatePicker myText={'Период от'} />}
                        />

                        <DatePicker
                            selected={endDate}
                            minDate={startDate}
                            maxDate={new Date()}
                            onChange={(date) => setEndDate(date)}
                            customInput={<CustomDatePicker myText={'Период до'} />}
                        />
                    </DatePickerBlock>

                    <WeekChart />





                </AdminRight>

            </FirstSection>

            <DonutSection>
                <PieChart />
            </DonutSection>

            <MenuSection>
                <SearchC/>

                <SelectWrapper>
                    <SelectItem>
                        <Select
                            className={'ads'}
                            classNamePrefix="menu_admin"
                            placeholder = 'Статус'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </SelectItem>

                    <SelectItem>
                        <Select
                            className={'ads'}
                            classNamePrefix="menu_admin"
                            placeholder = 'Статус'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </SelectItem>


                </SelectWrapper>

            </MenuSection>


            <HistorySection>
                <HeaderSectionHistory>
                    <H>История транзакций</H>
                    <ButtonWrapper>
                        <MyButton>
                            Выгрузить отчёт
                        </MyButton>
                    </ButtonWrapper>
                </HeaderSectionHistory>


                <HistoryTransaction isHeader={false} />
            </HistorySection>

        </Container>

    );
};

export default AdminFullPage;