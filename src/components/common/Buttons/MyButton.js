import React from 'react';
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({bgc})=>bgc};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: ${({color})=>color};
`
const Container = styled.div`
  width: ${({width})=>width};
  height: ${({height})=>height};
`

const MyButton = ({width='100%', click = () =>{}, height='100%',bgc='#0057FF' , color='white', children, clickHandler=()=>{}}) => {
    return (
        <Container width={width} height={height}>
            <Button bgc={bgc} color={color} onClick={()=>clickHandler()}>
                {children}
            </Button>
        </Container>
    );
};

export default MyButton;