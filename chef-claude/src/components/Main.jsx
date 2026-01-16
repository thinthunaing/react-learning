import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {

  

   const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
   const [recipeShown, setRecipeShown] = useState(false);
    
  
    function handleSubmit(formData) {
     
      
      const ingredient = formData.get('name');
      setIngredients(
        prev => [...prev,ingredient]
      )

    
    }

    const handleGetRecipe = () => setRecipeShown(true);
   
  


  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
            aria-label="add ingredient"
            type="text"
            placeholder=" Eg, Orgeno"
            name="name"
            />
        <button type="submit">Add Ingredient</button>
      </form>
     
     

      {ingredients.length > 0 && <IngredientsList listData = {ingredients} handleRecipe={handleGetRecipe}/>}

      {recipeShown && <ClaudeRecipe  />}

          
    </main>
  )
}