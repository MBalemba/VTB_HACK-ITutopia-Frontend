import React from 'react';
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background: #0057FF;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`

const MyButton = (props) => {
    return (
        <div>
            <Button {...props}>
                {props.children}
            </Button>
        </div>
    );
};

export default MyButton;