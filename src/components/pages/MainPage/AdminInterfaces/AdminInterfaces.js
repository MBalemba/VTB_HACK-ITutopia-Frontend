import React from 'react';
import {Container, H1} from "./AdminInterfacesStyle";
import WeekChart from "./WeekChart/WeekChart";
import PieChart from "./PieChart/PieChart";
import HistoryTransaction from "./HistoryTransaction/HistoryTransaction";
import {Ph} from "./HistoryTransaction/HistoryTransactionStyle";

const AdminInterfaces = () => {
    return (
        <Container>
            <H1>
                График еженедельных расходов
            </H1>

            <WeekChart />

            <PieChart />


            <HistoryTransaction />



        </Container>
    );
};

export default AdminInterfaces;