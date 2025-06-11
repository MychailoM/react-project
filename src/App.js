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

import React from "react";
import Recipes from "./Recipes";
import recipeApi from "./recipeApi.json"

function App() {
  return (
    <div>
      <Recipes items={recipeApi} />
    </div>
  )
}

export default App;