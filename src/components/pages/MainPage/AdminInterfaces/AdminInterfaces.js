import React from 'react';
import {Container, H1} from "./AdminInterfacesStyle";
import MonthChart from "./WeekChart/WeekChart";

const AdminInterfaces = () => {
    return (
        <Container>
            <H1>
                График еженедельных расходов
            </H1>

            <MonthChart />


        </Container>
    );
};

export default AdminInterfaces;