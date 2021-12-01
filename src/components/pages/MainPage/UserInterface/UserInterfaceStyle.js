import styled from "styled-components";

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Account = styled.div`
  min-width: 281px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Picture = styled.div`
  background-url: ${() => `url(${''})`};
  background-position: center center;
  background-repeat: no-repeat;
  border: 3px solid rgba(4, 33, 96, 0.1);
  width: 70px;
  height: 70px;
  background-size: cover;
  border-radius: 50%;
`

export const Textblock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Fio = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #001A68;
`

export const Departament = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: rgba(0, 26, 104, 0.4);
`

export const Balance = styled.div`
  background: rgba(0, 87, 255, 0.05);
  border-radius: 10px;
`

export const Amount = styled.div`

`
