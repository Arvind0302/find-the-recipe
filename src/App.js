import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const id = "e57e17f7";
  const key = "1c87be1ee870b9dfe00a0be3741640ad";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

  async function getrecipe() {
    var results = await axios.get(url);
    setrecipes(results.data.hits);
    // console.log(results.data.hits);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    getrecipe();
  };

  return (
    <div>
      <div className=" top d-flex flex-column justify-content-center align-items-center">
        <h1>FIND THE RECIPE <i className="fas fa-utensils"></i></h1>
        <form className="d-flex" onSubmit={OnSubmit}>
          <input
            className="form-control me-2"
            type="text"
            value={query}
            placeholder="Ingredient"
            onChange={(e) => setquery(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row my-3">
          {recipes.map((recipe) => {
            return (
              <div className="col-md-4" key={recipe.recipe.url} >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
