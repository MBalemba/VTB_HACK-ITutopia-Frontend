import React from 'react';
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({bgc})=>bgc};
  border-radius: 5px;
  transition: 0.2s ease-in-out ;
  cursor: ${({disabled})=>disabled ? 'default': 'pointer'};
  opacity: ${({disabled})=>disabled ? '0.5': '1'};
  width: 100%;
  height: 100%;
  color: ${({color})=>color};
  &:hover{
    opacity: 0.7;
    transform: scale(1.05);
  }
`
const Container = styled.div`
  width: ${({width})=>width};
  height: ${({height})=>height};
`

const MyButton = ({disabled=false, width='100%', click = () =>{}, height='100%',bgc='#0057FF' , color='white', children, clickHandler=()=>{}}) => {
    return (
        <Container width={width} height={height}>
            <Button disabled={disabled} bgc={bgc} color={color} onClick={()=>clickHandler()}>
                {children}
            </Button>
        </Container>
    );
};

export default MyButton;