import React from 'react';

function Food(props) {
  return (
    <article>
      <img src={props.strMealThumb} alt={props.strMeal} />
      <div>
        <h2>{props.strMeal} £</h2>
      </div>
    </article>
  );
}

export default Food;
