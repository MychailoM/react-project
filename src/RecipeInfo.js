import React from "react";
import PropTypes from "prop-types";

function RecipeInfo({ icon: Icon, text }) {
  return (
    <p>
      <Icon /> {text}
    </p>
  );
}

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RecipeInfo;
