export default function IngredientsList(props) {

    let lists = props.listData.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    return (
        <section>
              <h2>Your Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{lists}</ul>
                {props.listData.length >= 3 &&
                  <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.handleRecipe}>Get a recipe</button>
                </div>
              }
            </section>
    )
}