import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [progress, setProgress] = useState(0)
  const id = "e57e17f7";
  const key = "1c87be1ee870b9dfe00a0be3741640ad";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

  async function getrecipe() {
    setProgress(10);
    var results = await axios.get(url);
    setProgress(50);
    setrecipes(results.data.hits);
    setProgress(100);
    // console.log(results.data.hits);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    getrecipe();
  };

  return (
    <div>
    <div>
      <LoadingBar
        height={3}
        color='#00ff00'
        progress={progress} 
      />
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
    </div>
  );
}

export default App;
