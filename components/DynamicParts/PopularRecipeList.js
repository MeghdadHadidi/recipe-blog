import RecipeList from "../Recipe/RecipeList"

const PopularRecipeList = () => {
	return (
		<div className="block sidebar ">
			<h2 className="sidebar-headline"> دوست داشتنی‌ها </h2>
			<div className="popular-list">
				<ul className="list-unstyled">
					<RecipeList
						cat="2"
						count={5}
						render={recipe => (
							<li key={recipe.id}>
								<a
									href={`/recipe/${recipe.id}`}
									className="contenttype-recipes view-sidebar">
									<div className="recipe-image">
										<img
											src={`${
												recipe.image
											}&time=${new Date().getTime()}`}
											alt="Card image cap"
										/>
									</div>
									<div className="rating" />
									<p className="recipe-headline">
										{recipe.title}
									</p>
								</a>
							</li>
						)}
					/>
				</ul>
			</div>
		</div>
	)
}

export default PopularRecipeList
