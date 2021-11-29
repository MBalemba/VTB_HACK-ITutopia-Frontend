import styled from "styled-components";



export const BlockPie = styled.div`
  width: 813px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerChart = styled.div`
  width: 170px;
  height: 170px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`




export const CircleExpenses = styled.div`
  position: absolute;
  
  width: 100px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
`


export const CircleHeader = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #0142D3;
`

export const CircleValue = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  color: #000000;
`

export const CirclePercent = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #0142D3;
`


export const CategoryBlock = styled.div`
  width: 613px;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const HeaderName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`

export const CategoryList = styled.div`
  width: 650px;
  height: 88px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

export const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 17, 68, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 13px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 5px;
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: #0643C2;
  border-radius: 50%;
  margin-right: 10px;
`

export const ItemName = styled.div`
  margin-right: 12px;
`

export const CloseIco = styled.div`
`
