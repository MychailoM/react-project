import React from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 200px;
  display: flex;
  gap: 32px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  background-image: url("https://media.istockphoto.com/id/1334642574/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D0%BF%D0%B5%D1%80%D0%BE%D0%B2%D0%B8%D0%B9-%D0%BF%D0%B0%D0%BA%D0%B5%D1%82-%D0%B7-%D1%80%D0%BE%D0%B7%D0%BA%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%BC%D0%B8-%D0%BE%D0%B2%D0%BE%D1%87%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%BA%D0%BE%D0%BF%D1%96%D1%8E%D0%B2%D0%B0%D1%82%D0%B8-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%96%D1%80.jpg?s=612x612&w=0&k=20&c=sd4X4COHhOIKsfk42SOSgwbUlrwelk3rdzERPA1_5Js=");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
`;

function Recipes({ items }) {
  return (
    // змінити div
    <Container>
      {items.map((item, index) => (
        <Recipe key={index} {...item} />
      ))}
    </Container>
  );
}

Recipes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recipes;
