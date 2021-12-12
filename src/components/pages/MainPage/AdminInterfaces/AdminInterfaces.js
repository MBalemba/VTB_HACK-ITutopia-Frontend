import React, {useContext, useEffect} from 'react';
import {BlockToFull, Container, ContainerTransaction, H1} from "./AdminInterfacesStyle";
import WeekChart from "./WeekChart/WeekChart";
import PieChart from "./PieChart/PieChart";
import HistoryTransaction from "./HistoryTransaction/HistoryTransaction";
import {Ph} from "./HistoryTransaction/HistoryTransactionStyle";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import MyButton from "../../../common/Buttons/MyButton";
import {useNavigate, useParams} from "react-router-dom";
import {FULLPAGEADMIN} from "../../../../utils/path";

const AdminInterfaces = observer(() => {

    const {admin} = useContext(Context);
    const navigate  = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

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
    }, [id])




    return (
        <Container>
            <H1>
                График еженедельных расходов
            </H1>

            <WeekChart/>

            { admin.getTopSpendingCategories && admin.getTopSpendingCategories.maxSum > 0 ? <PieChart topCategories={admin.getTopSpendingCategories} /> : null }


            <ContainerTransaction>
                <HistoryTransaction data={admin.getTransactionHistory} />
            </ContainerTransaction>


            <BlockToFull>
                <MyButton height={'40px'} width={'240px'} clickHandler={(e)=>{navigate("../../full/adminHome")}}>
                    Открыть историю транзакций
                </MyButton>
            </BlockToFull>

        </Container>
    );
});

export default AdminInterfaces;