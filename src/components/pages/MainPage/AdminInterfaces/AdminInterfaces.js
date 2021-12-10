import React, {useContext, useEffect} from 'react';
import {Container, ContainerTransaction, H1} from "./AdminInterfacesStyle";
import WeekChart from "./WeekChart/WeekChart";
import PieChart from "./PieChart/PieChart";
import HistoryTransaction from "./HistoryTransaction/HistoryTransaction";
import {Ph} from "./HistoryTransaction/HistoryTransactionStyle";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

const AdminInterfaces = observer(() => {

    const {admin} = useContext(Context);


    useEffect(() => {
        admin.expenseSchedule({})
            .then(() => {

                }
            ).catch(() => {

        })
    }, [])

    useEffect(() => {
        admin.topSpendingCategories({})
            .then(() => {

                }
            ).catch(() => {

        })
    }, [])

    useEffect(() => {
        admin.transactionHistory({})
            .then(() => {

                }
            ).catch(() => {

        })
    }, [])




    return (
        <Container>
            <H1>
                График еженедельных расходов
            </H1>

            <WeekChart/>

            <PieChart topCategories={admin.getTopSpendingCategories} />


            <ContainerTransaction>
                <HistoryTransaction data={admin.getTransactionHistory} />
            </ContainerTransaction>


        </Container>
    );
});

export default AdminInterfaces;