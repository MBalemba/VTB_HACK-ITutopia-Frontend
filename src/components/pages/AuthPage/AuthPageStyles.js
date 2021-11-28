import styled from "styled-components";


export const HolstAuth = styled.div`
  min-width: 100%;
  min-height: 100%;
  overflow-y: hidden;
  background: #E5E5E5;
`

export const AuthForm = styled.div`
  position: absolute;
  width: 480px;
  height: 429px;
  left: 320px;
  top: 328px;
  padding: 50px;

  background: #FFFFFF;
  box-shadow: 0px 4px 65px rgba(0, 22, 86, 0.15);
  border-radius: 15px;
`

export const Logo = styled.div`
  margin-bottom: 50px;
`
export const Autorization = styled.p`
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  color: #000000;
`
export const InputWrapper = styled.div`
  margin-bottom: 25px;
`

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  width: 380px;
  height: 51px;
  border: 1px solid rgba(0, 26, 104, 0.15);
  box-sizing: border-box;
  border-radius: 5px;

  &:last-child {
    margin-top: 10px;
  }
`

export const ButtonWrapper = styled.div`
  width: 380px;
  height: 51px;
`

export const Illustration = styled.img`
 
    position: absolute;
    background-repeat: no-repeat;
    
    width: 50%;
    height: 900px;
    left: 877.91px;
    bottom: 0px;
    object-fit: cover;
`


