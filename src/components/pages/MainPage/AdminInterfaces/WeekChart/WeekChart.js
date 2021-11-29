import React, {useContext, useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import {ContainerChart} from "./WeekChartStyle";


class ApexChat extends React.Component {

    constructor(props) {
        super(props);
        let custom = function ({series, seriesIndex, dataPointIndex, w}) {

            //let data = this?.props?.dateData[dataPointIndex]?.data

            return `<div class='tooltip monthChart__tooltip'>
                            <div class='tooltip__tooltipContent'>
                                <div class='tooltip__tooltipInfo'>
                                    <p class='tooltip__tooltipInfo_price'>
                                        ${series[0][dataPointIndex]}
                                        <span class='tooltip__tooltipInfo_span'>₽</span>
                                    </p>                           
                                    <p>
                                       
                                    </p>
                                    
                                </div>
                            </div>   
                        </div>
                        `
        }

        custom = custom.bind(this)
        this.state = {

            series: [{
                name: "Desktops",
                data: [[1, 34000], [2, 5400], [3, 23000], [4, 43000], [5, 34000],
                    [6, 34000], [7, 21312]]
            }],
            fill: {
                type: 'solid',
                colors: ['#1A73E8', '#B32824'],
            },
            options: {
                chart: {
                    fontFamily: 'Gilroy',
                    fontSize: '14px',
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    },
                },


                legend: {
                    show: false,
                },
                colors: ['#002DB2'],

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: '',
                    align: 'left'
                },

                yaxis: {
                    tickAmount: 3,
                    seriesName: 'asd',
                    labels: {
                        show: true,
                        formatter: (value) => {
                            return Math.ceil(value/1000) + ' тыс'
                        },
                        style: {
                            colors: ['rgba(20, 24, 52, 0.4)'],
                            fontSize: '14px',
                            fontFamily: 'Gilroy',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                },


                xaxis: {
                    type: 'category',
                    // tickPlacement: 'between',
                    categories: ['ПН', 'ВТ', 'CР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
                    tooltip: {
                        enabled: false,
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: 'rgba(20, 24, 52, 0.4)',
                            fontSize: '14px',
                            fontFamily: 'Gilroy',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },


                },

                grid: {
                    show: true,
                    borderColor: 'rgba(20, 24, 52, 0.4)'
                },

                tooltip: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    shared: true,
                    custom: custom,
                    theme: false,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Gilroy',
                    },

                },


            },




        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot){

        if(prevProps.dateData.length !== this.props.dateData.length){
            const arr = this.props.dateData.map((el,index)=>[index+1 , el.sum])

            this.setState({
                ...this.state,
                series: [{
                    name: this.state.series.name,
                    data: arr,
                    store: [...this.props.dateData]
                }]
            })
        }
    }


    render() {
        return (


            <div className="MonthChart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={260}/>
            </div>


        );
    }
}


const WeekChart = () => {


    return (
        <ContainerChart className={'monthChart'}>
            <ApexChat />
        </ContainerChart>
    );
};

export default WeekChart;