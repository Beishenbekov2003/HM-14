import React from 'react'
import styled from "styled-components"
import BusketButton from './BusketButton'
const Header = () => {
  return <Container>
<Logo>ReactMeals</Logo>
<BusketButton/>
  </Container>
   
}

export default Header

const Container = styled.header`
position: fixed;
top: 0;
  width  : 100%;
  height: 101px;
  background-color: #8A2B06;
  border: none;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
  z-index: 1;
`
const Logo = styled.p`
font-weight: 600;
line-height: 57px;
color: #ffffff;
font-size: 38px;
margin: 0;
`