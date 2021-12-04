import React from 'react';
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0057FF;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: white;
`

const MyButton = (props) => {
    return (
            <Button {...props}>
                {props.children}
            </Button>
    );
};

export default MyButton;