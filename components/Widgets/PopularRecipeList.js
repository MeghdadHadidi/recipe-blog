import RecipeList from "../Recipe/RecipeList"

const PopularRecipeList = () => {
    return (
        <ul>
            <RecipeList
                cat="2"
                count={5}
                render={recipe => (
                    <li key={recipe.id}>
                        <a href={`/recipe/${recipe.id}`}>{recipe.title}</a>
                    </li>
                )}
            />
        </ul>
    )
}

export default PopularRecipeList
