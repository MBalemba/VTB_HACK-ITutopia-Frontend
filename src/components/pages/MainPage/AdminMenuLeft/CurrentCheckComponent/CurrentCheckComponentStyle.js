import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const CurrentCheck = styled.div`
    margin-bottom: 35px;
`

export const HeaderCheck = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`
export const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
`

export const ItemSelect = styled.div`
  margin-top: 10px;
  max-width: ${({width})=>width};
  min-width: ${({width})=>width};
  margin-right: 10px;
`

export const AddWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const ItemAdd = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
`

export const IcoAdd = styled.div`
  
`

export const AddText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  color: rgba(0, 26, 104, 0.6);
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`





export const AdminCardInfo = styled.div`
  background: linear-gradient(97.26deg, rgba(0, 102, 255, 0.05) 0%, rgba(0, 133, 255, 0.05) 100%);
  border-radius: 15px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export const CardInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: flex-end;
  &:last-child{
    margin-bottom: 0px;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const P = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: rgba(0, 26, 104, 0.35);
  margin-bottom: 5px;
`

export const Number = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NumberItem = styled.p`
  
  margin-right: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 26, 104, 0.75);
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const Alink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 26, 104, 0.75);
  
  &:hover{
    color: #8000FF;
  }
  
  &.active{
    display: none;
  }
`

export const Currency = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 26, 104, 0.75);
`

export const MoneyAdmin = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  color: #001A68;
`
