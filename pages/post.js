import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "reactstrap"
import Layout from "../components/layout"

import PostDetails from "../components/DynamicParts/PostDetails"

import "../static/css/style.css"
import "../static/css/sty.scss"

const Post = () => (
	<Container>
		<Layout>
			<PostDetails />
		</Layout>
	</Container>
)

export default Post
