const RecipeItem = ({ recipe }) => (
    <div>
        <img src={`${recipe.image}&time=${new Date().getTime()}`} />
        <h1>{recipe.title}</h1>
        <p>{recipe.body}</p>
    </div>
)

export default RecipeItem
