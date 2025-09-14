import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [recipeData, setRecipeData] = useState([]);


  useEffect(() => {
    
    // Traditional fetch
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((result) => console.log(result.recipes))
      .catch((error) => console.log(error))
  
      // Axios fetch
      axios.get("https://dummyjson.com/recipes")
      .then((result) => {
        console.log(result.data.recipes)
        setRecipeData(result.data.recipes)  
        })
      .catch((error) => console.log(error))

  }, [])


  return (
    <>
      <h1>Recipes</h1>

      {/* ==== Map out the data */}
      {recipeData.map((recipe) => {
        return (
          <div  key={recipe.id}>
            <h3>{recipe.name} </h3>
            <img src={recipe.image} alt={`${recipe.name} photo`} style={{height: "200px", borderRadius: "50%"}} />
          </div>
        )
      })}
    </>
  )
}

export default App
