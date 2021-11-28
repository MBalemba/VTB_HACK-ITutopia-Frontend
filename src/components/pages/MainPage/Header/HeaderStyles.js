import styled from "styled-components";


export const HeaderFullScreen = styled.div`
  position: fixed;
  
  width: 100%;
  background: #002DB2;
`

export const ContentHeader = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`

export const Logo = styled.div`
`

export const User = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
 
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.div`
    margin-right: 12px;
`

export const Img = styled.div`
  width: 48px;
  height: 48px;
  background: ${() => ' url(.jpg)'};
  border: 3px solid rgba(0, 87, 255, 0.7);
  box-sizing: border-box;
  margin-right: 15px;
  border-radius: 50%;
`

export const Arrow = styled.div`
`