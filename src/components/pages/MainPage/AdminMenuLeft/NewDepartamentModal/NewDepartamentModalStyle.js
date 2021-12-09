import styled from "styled-components";


export const Section1 = styled.div`
  
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 368px;
  
`
export const EmployersSelectBlock = styled.div`
  
`
export const SelectWrapper = styled.div`
  width: 248px;
  height: 45px;
  margin-bottom: 30px;
`
export const TypeCardBlock = styled.div`
  display: block;
  width: 100%;
`
export const TypeCardText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 26, 104, 0.3);
  margin-bottom: 15px;
`

export const EmployersList = styled.div`
  width: 100%;
  height: 368px;
  overflow-y: auto;
  
`
export const EmployerItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  padding: 10px 25px 10px 10px;
  width: 100%;
  height: 70px;
  border: 1px solid rgba(0, 26, 104, 0.05);
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: 15px;
  cursor: pointer;
`

export const ButtonAdd =  styled.div`
  width: 100px;
  cursor: pointer;
  height: 100%;
  color: ${({color})=> color};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ItemName =  styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #001A68;
`
export const Check =  styled.div`
  margin-right: 12px;
`
export const LeftSide =  styled.div`
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #001A68;
  display: flex;
  justify-content: space-between;
  
`