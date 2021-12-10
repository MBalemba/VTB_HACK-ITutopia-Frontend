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
import {observer} from "mobx-react-lite";
import {Context} from "../../../../../index";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {


            series: this.props.data.map(el=>Number(el.sum)),
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


const PieChart = observer(({topCategories}) => {


    const {admin} = useContext(Context)
    const  colors = ['#0643C2', '#1141A0', '#04215F', '#3A85FF', '#0C3588']

    return (

        <BlockPie className={'monthChart'}>

            {topCategories?.maxSum !== null  &&   <ContainerChart>
                <ApexChart data={topCategories.list} />
                <CircleExpenses>
                    <CircleHeader>
                        Расходы
                    </CircleHeader>

                    <CircleValue>
                        {(Number(topCategories.maxSum)).toLocaleString() + ' ₽'}
                    </CircleValue>


                </CircleExpenses>
            </ContainerChart>

            }

            <CategoryBlock>
                <HeaderName>
                    Топ категорий трат
                </HeaderName>

                <CategoryList>

                    {
                        topCategories?.list.map((el, index)=>
                            <ItemList>
                                <Dot color={colors[index]}>

                                </Dot>

                                <ItemName>
                                    {el.category}
                                </ItemName>

                            </ItemList>
                        )
                    }


                </CategoryList>
            </CategoryBlock>

        </BlockPie>
    );
});

export default PieChart;

