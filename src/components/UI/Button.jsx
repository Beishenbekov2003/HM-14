import React from 'react'
import styled from 'styled-components'

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
background: #8A2B06;
border-radius: 20px;
font-weight: 600;
padding: 10px 32px; 
color: white;
display: flex;
align-items: center;
border: none;
cursor: pointer;
:hover {
  background: #7E2A0A;
}

:active {
 background: #993108;
}
`