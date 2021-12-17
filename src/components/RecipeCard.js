import React from "react";

export default function RecipeCard(props) {
  var ingredients = props.recipe.recipe.ingredientLines;
  var labels = props.recipe.recipe.dietLabels;
  var name=props.recipe.recipe.label;
  var url=props.recipe.recipe.url;
  return (
    <div className="card my-4">
      <img src={props.recipe.recipe.image} className="card-img-top" alt="" />
      <div className="card-body">
      <h4 className="card-title my-2">{name}</h4>
        {labels.map((label) => {
          return <span className="badge rounded-pill bg-success mx-1 my-2" key={Math.random()}>{label}</span>;
        })}
        <div className="d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ingredients
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {ingredients.map((Ingredient) => {
                return <li className="dropdown-item"  key={Math.random()}>{Ingredient}</li>;
              })}
            </ul>
          </div>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
