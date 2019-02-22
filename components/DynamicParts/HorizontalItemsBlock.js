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

const HorizontalItemsBlock = props => {
	return (
		<div className="main-block horizontalList">
			<h2 className="headline-article"> غذاهای جدید </h2>
			<Row>
				<RecipeList
					count={4}
					cat="1"
					render={recipe => {
						return (
							<Col md="3">
								<Link href="">
									<a>
										<Card>
											{/* <CardImg top width="100%" src={`${recipe.image}&time=${new Date().getTime()}`} alt="Card image cap" /> */}

											<ImageLoader
												src={`${
													recipe.image
												}?time=${new Date().getTime()}`}
												alt="Card image cap"
											/>

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

export default HorizontalItemsBlock
