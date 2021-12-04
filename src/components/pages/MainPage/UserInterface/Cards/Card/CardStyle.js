import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 25px 30px;
  width: 320px;
  height: 200px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  overflow: hidden;
`
export const Content = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BigCircle = styled.div`
  position: absolute;
  z-index: 1;
  width: 330px;
  height: 330px;
  left: 80px;
  top: -15px;
  background: linear-gradient(180deg, rgba(0, 87, 255, 0.15) 0%, rgba(0, 87, 255, 0) 100%);
  border-radius: 50%;
`
export const SmallCircle = styled.div`
  position: absolute;
  z-index: 1;
  width: 210px;
  height: 210px;
  left: 200px;
  top: 105px;
  background: linear-gradient(180deg, rgba(0, 87, 255, 0.15) 0%, rgba(0, 87, 255, 0) 100%);
  border-radius: 50%;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoBank = styled.div`

`
export const SumBlock = styled.p`
  padding: 5px 7px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  background: #FFFFFF;
  border-radius: 5px;
  color: #152C4D;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MiddleBlock = styled.div`

`
export const Category = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #0085FF;
  margin-bottom: 2px;
  text-transform: uppercase;
`
export const NumberBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Number = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NumberItem = styled.p`
  margin-right: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FioCard = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`
export const LogoCard = styled.div`

`
