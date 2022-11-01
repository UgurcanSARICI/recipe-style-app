import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType }) => {
  console.log(mealType);
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>

      <FormContainer>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button type="submit">SEARCH</Button>

        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
