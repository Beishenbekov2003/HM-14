import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg";

const MealItemForm = ({ id }) => {
  return (
    <StyledForm>
      <div>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput type="number" min={1} max={5} id={id} defaultValue={1} />
      </div>
      <Button>
        <StyledIcon />
        ADD
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
