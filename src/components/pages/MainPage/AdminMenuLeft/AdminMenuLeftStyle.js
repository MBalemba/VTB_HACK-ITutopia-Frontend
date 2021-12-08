import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  width: 610px;
  height: 1412px;
  background: #FFFFFF;
  box-shadow: 0px 4px 65px rgba(0, 22, 86, 0.15);
  border-radius: 15px;
  padding: 50px;
`
export const EmployeesCardsMenu = styled.div`

`
export const Search = styled.label`
  cursor: text;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 20px;
  width: 100%;
  height: 53px;
  transition: 0.5s;
  border: ${({focus})=> focus ?'1px solid rgba(0, 26, 104, 0.9)' :'1px solid rgba(0, 26, 104, 0.1)'}; 
  box-sizing: border-box;
  border-radius: 10px;

  
`
export const Input = styled.input`
  width: 90%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  outline: none;
  border: none;
  &::placeholder {
    color: rgba(0, 26, 104, 0.15);
  }
  &:focus{
    color: black;
  }
`


export const SearchLogo = styled.label`

`

export const DepartamentBlock = styled.div`
    margin-top: 40px;
    overflow-y: auto;
    max-height: 500px;
`







