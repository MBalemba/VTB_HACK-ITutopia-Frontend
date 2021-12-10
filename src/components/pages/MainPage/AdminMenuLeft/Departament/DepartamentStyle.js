import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`
export const DepartamentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Ico = styled.div`
  margin-right: 15px;
`


export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const NameDepartament = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 2px;
  /* identical to box height */


  color: #00103E
`
export const AmountCards = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: rgba(0, 22, 86, 0.5);
`
export const Employers = styled.div`
  width: 100%;
  padding-left: 25px;
  
`
export const EmployersContent = styled.div`
  border-left: 1px solid rgba(0, 22, 86, 0.1);
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  
`
export const EmployerItem = styled(NavLink)`
  cursor: pointer;
  margin-bottom: 35px;
  text-decoration: none;
  &:last-child{
    margin-bottom: 0px;
  }
  &:active{
    text-decoration: none;
  }
  
  &.active{
    min-width: 200px;
    min-height:200px;
    background-color:black;
  }
`
export const Fio = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: normal;
  
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
  margin-top: 10px;
  color: ${({active=false})=> active ? '#0142D3' : '#001A68' };
`
export const ButtonDots = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8px;
`
export const Cards = styled.div`

`
export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 20px;
  
  &:last-child{
    margin-bottom: 0px;
  }
`

export const Dot = styled.div`
  min-width: 10px;
  min-height: 10px;
  background-color: ${({color}) => color};
  border-radius: 50%;
  margin-right: 10px;
`

export const LeftSideCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 200px;
`

export const Line = styled.div`
  margin: 0px 15px;
  min-height: 1px;
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
`



export const Summ = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #0142D3;
  margin-left: 10px;
`
export const Kategory = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-transform: uppercase;
  color: rgba(0, 22, 86, 0.25);
`