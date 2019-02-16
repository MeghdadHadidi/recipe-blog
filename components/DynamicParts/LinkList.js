import RecipeList from "../Recipe/RecipeList"

const LinkList = () => {
    return (
        <div className="block sidebar ">
            <h2 className="sidebar-headline"> الان فصلشه </h2>
            <div className="sidebar-linklist">
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
            </div>
        </div>        
    )
}

export default LinkList
