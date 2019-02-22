import React from "react"
import ImageLoader from "../ImageLoader"

const Recipe = ({ recipe }) => {
	return (
		<div className="recipe-container">
			<h2>{recipe.title}</h2>
			<h4>{recipe.subtitle}</h4>
			<div className="recipe-image">
				<ImageLoader src={recipe.image} />
			</div>
		</div>
	)
}

export default Recipe
