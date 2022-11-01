import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

const Home = () => {
  const apiKey = "654e7a3e84b3384f93779196b6c6ec82";
  const appId = "46fc98d5";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);

    setRecipes(data.hits);
  };
  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={selectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
