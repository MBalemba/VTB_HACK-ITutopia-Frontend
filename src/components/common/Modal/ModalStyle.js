import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  
  transition: 0.2s;
  
  &.active{
    opacity: 1;
    pointer-events: auto;
    transition: 0.5s;
  }
`



export const ModalContent = styled.div`
  padding: 50px;
  width: 751px;
  background: #FFFFFF;
  box-shadow: 0px 4px 65px rgba(0, 22, 86, 0.15);
  border-radius: 15px;
  transform: scale(0.5);
  opacity: 0;
  
  &.active{
    opacity: 1;
    transform: scale(1);
    transition: 0.5s;
  }
`
export const ModalFooter = styled.div`
  width: 100%;
    display: flex;
  justify-content: space-between;
`
export const ModalHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`
export const MiddleContent = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
`