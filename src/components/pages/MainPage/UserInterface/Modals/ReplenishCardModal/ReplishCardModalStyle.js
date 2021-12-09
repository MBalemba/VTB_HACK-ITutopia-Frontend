import styled from "styled-components";

export const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const EmployersSelectBlock = styled.div`
  margin-left: 35px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
export const ItemNumber = styled.div`

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;

  color: #001A68
`

export const TypeCardText = styled.div`
  margin-top: 30px;
`
export const P = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
  color: #001A68;
`


export const CurrentCheck = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-top: 43px;
  margin-bottom: 20px;
`

export const NumberCard = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  width: 199px;
  color: #001A68;
`
export const itemNumber = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`
export const SumToTransferText = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`
export const SumToTransferBlock = styled.div`
    
`
export const Input = styled.input`
  width: 100%;
`
export const Error = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
  opacity: ${({here})=>here?1 :0};
  transition: 0.5s;
  color: red;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  margin-bottom: 5px;
`
