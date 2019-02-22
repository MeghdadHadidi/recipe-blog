import React, { PureComponent } from "react"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import Recipe from "../post/Recipe"

import { getRecipeDetail } from "../../actions/recipes"

class PostDetail extends PureComponent {
	state = {
		recipe: {}
	}

	componentDidMount() {
		this.props.getRecipeDetail().then(res => {
			this.setState({
				recipe: res.payload
			})
		})
	}

	render() {
		return (
			<div className="post-details">
				<Recipe recipe={this.state.recipe} />
			</div>
		)
	}
}

const mapStateToProps = () => ({})

export default connect(
	mapStateToProps,
	{ getRecipeDetail }
)(PostDetail)
