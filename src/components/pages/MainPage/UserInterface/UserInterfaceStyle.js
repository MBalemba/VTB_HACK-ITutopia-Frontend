import styled from "styled-components";

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

export const Account = styled.div`
  width: 281px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Picture = styled.div`
  background-url: ${({src}) => `url(${src})`};
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
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #001A68;
  margin-bottom: 5px;
`

export const Departament = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-transform: uppercase;

  color: rgba(0, 26, 104, 0.4);
`

export const Balance = styled.div`
  background: rgba(0, 87, 255, 0.05);
  border-radius: 10px;
  padding: 15px 20px;
`

export const Amount = styled.div`

`



