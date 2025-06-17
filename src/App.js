// import React from "react";
// import Gallery from './Gallery';
// import paintings from './paintings.json';

// function App() {
//   return (
//     <div>
//       <h2>gallery</h2>
//       <Gallery items={paintings} />
//     </div>
//   )
// }

// export default App;


//рецепти
import GlobalStyles from "./GlobalStyles";
import React from "react";
import Recipes from "./Recipes";
import recipeApi from "./recipeApi.json"
import Header from "./Header"



function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <Recipes items={recipeApi} />
    </>
  )
}

export default App;