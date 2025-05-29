import React from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

function Recipes({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <Recipe key={index} {...item} />
      ))}
    </div>
  );
}

Recipes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recipes;
