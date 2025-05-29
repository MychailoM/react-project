import React from "react";
import PropTypes from "prop-types";

function Recipe({ name, time, servings, calories, difficulty, image }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10, width: 300 }}>
      <h2>{name}</h2>
      <img style={{width:300}} src={image} alt={name} />
      <p>час: {time}</p>
      <p>порції: {servings}</p>
      <p>калорії: {calories}</p>
      <p>складність: {difficulty}</p>
    </div>
  );
}

Recipe.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  time: PropTypes.string,
  servings: PropTypes.number,
  calories: PropTypes.number,
  difficulty:PropTypes.number,
}

export default Recipe;