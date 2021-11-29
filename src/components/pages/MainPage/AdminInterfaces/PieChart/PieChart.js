import ReactApexChart from "react-apexcharts";
import React, {useContext, useEffect} from 'react';
import {
    BlockPie,
    CategoryBlock,
    CategoryList, CircleExpenses, CircleHeader, CirclePercent, CircleValue,
    CloseIco,
    ContainerChart, Dot,
    HeaderName,
    ItemList,
    ItemName
} from "./PieChartStyle";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {


            series: [44, 55, 41, 17, 15],
            options: {
                colors: ['#0643C2', '#1141A0', '#04215F', '#3A85FF', '#0C3588'],
                chart: {
                    type: 'donut',

                },
                dataLabels: {
                    enabled: false,
                },

                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '75%',

                            labels: {
                                show: true,
                            }
                        }
                    }
                },

                legend: {
                    show: false,
                },
            },


        };
    }


    render() {
        return (
            <ReactApexChart options={this.state.options} height={194} series={this.state.series} type="donut"/>
        );
    }
}


const PieChart = () => {
    return (

        <BlockPie className={'monthChart'}>

            <ContainerChart>
                <ApexChart/>
                <CircleExpenses>
                    <CircleHeader>
                        Расходы
                    </CircleHeader>

                    <CircleValue>
                        {'223 715'.toLocaleString() + ' ₽'}
                    </CircleValue>

                    <CirclePercent>
                        100%
                    </CirclePercent>
                </CircleExpenses>
            </ContainerChart>

            <CategoryBlock>
                <HeaderName>
                    Топ категорий трат
                </HeaderName>

                <CategoryList>
                    <ItemList>
                        <Dot>

                        </Dot>

                        <ItemName>
                            Еда и супермаркеты
                        </ItemName>

                        <CloseIco>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.70976 10.0376L4.99976 6.32177L1.28976 10.0376L0.461426 9.20927L4.17726 5.49927L0.461426 1.78927L1.28976 0.960938L4.99976 4.67677L8.70976 0.966771L9.53226 1.78927L5.82226 5.49927L9.53226 9.20927L8.70976 10.0376Z"
                                    fill="#001144" fill-opacity="0.25"/>
                            </svg>

                        </CloseIco>
                    </ItemList>

                    <ItemList>
                        <Dot>

                        </Dot>

                        <ItemName>
                            Гостиницы и отели
                        </ItemName>

                        <CloseIco>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.70976 10.0376L4.99976 6.32177L1.28976 10.0376L0.461426 9.20927L4.17726 5.49927L0.461426 1.78927L1.28976 0.960938L4.99976 4.67677L8.70976 0.966771L9.53226 1.78927L5.82226 5.49927L9.53226 9.20927L8.70976 10.0376Z"
                                    fill="#001144" fill-opacity="0.25"/>
                            </svg>

                        </CloseIco>
                    </ItemList>

                    <ItemList>
                        <Dot>

                        </Dot>

                        <ItemName>
                            Оборудование
                        </ItemName>

                        <CloseIco>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.70976 10.0376L4.99976 6.32177L1.28976 10.0376L0.461426 9.20927L4.17726 5.49927L0.461426 1.78927L1.28976 0.960938L4.99976 4.67677L8.70976 0.966771L9.53226 1.78927L5.82226 5.49927L9.53226 9.20927L8.70976 10.0376Z"
                                    fill="#001144" fill-opacity="0.25"/>
                            </svg>

                        </CloseIco>
                    </ItemList>

                    <ItemList>
                        <Dot>

                        </Dot>

                        <ItemName>
                            Оплата транспорта
                        </ItemName>

                        <CloseIco>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.70976 10.0376L4.99976 6.32177L1.28976 10.0376L0.461426 9.20927L4.17726 5.49927L0.461426 1.78927L1.28976 0.960938L4.99976 4.67677L8.70976 0.966771L9.53226 1.78927L5.82226 5.49927L9.53226 9.20927L8.70976 10.0376Z"
                                    fill="#001144" fill-opacity="0.25"/>
                            </svg>

                        </CloseIco>
                    </ItemList>

                </CategoryList>
            </CategoryBlock>

        </BlockPie>
    );
};

export default PieChart;

