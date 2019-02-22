import Link from "next/link"
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Row,
	Col
} from "reactstrap"
import RecipeList from "../Recipe/RecipeList"
import ImageLoader from "../ImageLoader"

const MainItemsBlock = props => {
	return (
		<div className="main-block">
			<h2 className="headline-article"> دسته بندی اول </h2>
			<Row>
				<RecipeList
					count={3}
					cat="1"
					render={(recipe, index) => {
						var md = index === 0 ? 12 : 6
						return (
							<Col
								md={md}
								className={index === 0 ? "full-height" : ""}>
								<Link
									href={`/post?title=${recipe.title}&type=${
										recipe.type
									}`}>
									<a>
										<Card>
											{/* <CardImg top width="100%" src={`${recipe.image}&time=${new Date().getTime()}`} alt="Card image cap" /> */}
											<ImageLoader
												src={`${
													recipe.image
												}&time=${new Date().getTime()}`}
												alt="Card image cap">
												<div
													className={`posttype ${
														recipe.type
													}`}>
													<span />
												</div>
											</ImageLoader>
											<CardBody>
												<CardTitle>
													{recipe.title}
												</CardTitle>
											</CardBody>
										</Card>
									</a>
								</Link>
							</Col>
						)
					}}
				/>
			</Row>
		</div>
	)
}

export default MainItemsBlock
