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
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 20px;
  width: 100%;
  height: 53px;
  border: 1px solid rgba(0, 26, 104, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  
  
  &:hover{
    border: 1px solid #8000FF;
    -webkit-box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
    -moz-box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
    box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
  }
  &:focus{
    border: 1px solid #8000FF;
    -webkit-box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
    -moz-box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
    box-shadow: 0px 4px 18px 0px rgba(128, 0, 255, 0.2);
  }
  
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
    overflow-y: scroll;
    max-height: 500px;
`







