import PropTypes from "prop-types"

// Components
import RecipeItem from "./RecipeItem"

const RecipeItemContainer = props => {
    const { recipe, render, index } = props

    return (
        <>
            {render && render(recipe, index)}
            {!render && <RecipeItem recipe={recipe} />}
        </>
    )
}

RecipeItemContainer.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        image: PropTypes.string,
        author: PropTypes.number.isRequired,
        difficulty: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(
            PropTypes.shape({
                quantity: PropTypes.string,
                measurement: PropTypes.string,
                name: PropTypes.string
            })
        ),
        duration: PropTypes.string,
        nutritionalValue: PropTypes.arrayOf(
            PropTypes.shape({
                nutrition: PropTypes.string,
                nutritionQuantity: PropTypes.string,
                nutritionMeasurement: PropTypes.string
            })
        ),
        categories: PropTypes.array.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired
}

export default RecipeItemContainer
