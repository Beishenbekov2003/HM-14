import React from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";
const DUMMY_MEALS = [
  {
    id: "1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];
const Meals = () => {
  return <Card >
    {DUMMY_MEALS.map((meal, index) => {
      return <div key={index}>
         <MealItem  meal={meal} />
    </div>
    })}
    </Card>

};

export default Meals;

const Card = styled.ul`
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 64rem;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`;
