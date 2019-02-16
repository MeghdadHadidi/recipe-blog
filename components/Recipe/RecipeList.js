import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import RecipeItemContainer from "./RecipeItemContainer"

// Actions
import { getRecipeItems } from "../../actions/recipes"

class RecipeList extends Component {
    componentDidMount() {
        const { count, cat } = this.props
        this.props.getRecipeItems({ count, cat })
    }

    render() {
        const { items, render } = this.props
        return (
            <>
                {items.map((recipe, index) => (
                    <RecipeItemContainer
                        key={recipe.id}
                        recipe={recipe}
                        index={index}
                        render={render}
                    />
                ))}
            </>
        )
    }
}

RecipeList.defaultProps = {
    count: 3,
    cat: "1"
}

RecipeList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    getRecipeItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    items: state.recipes.items,
    error: state.recipes.error,
    loading: state.recipes.fetching
})

export default connect(
    mapStateToProps,
    { getRecipeItems }
)(RecipeList)
