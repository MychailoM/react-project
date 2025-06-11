import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const RecipeCard = styled.div`
  
  height: 480px;
  width: 240px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(159, 159, 163);
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 10px auto;
`;

const Time = styled.h3`
  color: white;
  font-size: 20px;
  background-color: rgb(113, 113, 120);
  padding: 12px;
  border-radius: 50%;
`;
  

const Calories = styled.h3`
  color: white;
  font-size: 20px;
  background-color: rgb(113, 113, 120);
  padding: 12px;
  border-radius: 50%;
`;

const Servings = styled.h3`
  color: white;
  font-size: 20px;
  background-color: rgb(113, 113, 120);
  padding: 12px;
  border-radius: 50%;
`;

const Difficulty = styled.h2`
  text-align: center;
  color: white;
  font-size: 28px;
  margin-top: -10px;
  
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 10px;
`;


function Recipe({ name, time, servings, calories, difficulty, image }) {
  return (
    <RecipeCard>
      <Title>{name}</Title>
      <Image src={image} alt={name} />
      <InfoWrap>
        <Time>{time} хв</Time>
        <Calories>{calories}</Calories>
        <Servings>{servings} шт</Servings>
      </InfoWrap>
      <Difficulty>{difficulty}</Difficulty>
    </RecipeCard>
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