import React from "react"

const Recipe = ({ recipe }) => {
	return (
		<div className="recipe-container">
			<h2>{recipe.title}</h2>
			<h4>{recipe.subtitle}</h4>
		</div>
	)
}

export default Recipe
