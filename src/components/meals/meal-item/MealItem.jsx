import React from 'react'
import styled from 'styled-components';
import MealItemForm from './MealItemForm';
const MealItem = ({meal}) => {
  return (
    <List>
    <ListItem>
      <Title>{meal.title}</Title>
      <Description>{meal.description}</Description>
      <Price>${meal.price}</Price>
      </ListItem>
      <MealItemForm id={"amunt" + Math.random().toString()}/>
        </List>
  )
}

export default MealItem


const List = styled.li`
  list-style: none;
  border-bottom: 1px solid #D6D6D6;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :last-child {
border: none;
margin-bottom: 0;
  }
`;
const ListItem = styled.div`
  margin-bottom: 20px;
  
  
`;
const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
const Description = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-top: 4px;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #AD5502;
  margin-top: 4px;
`