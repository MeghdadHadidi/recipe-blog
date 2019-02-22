import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Col } from "reactstrap"

import SidebarAd from "../components/StaticParts/SideAd"
import Layout from "../components/layout"
import PopularRecipeList from "../components/DynamicParts/PopularRecipeList"
import LinkList from "../components/DynamicParts/LinkList"
import HorizontalItemsBlock from "../components/DynamicParts/HorizontalItemsBlock"
import VideoList from "../components/DynamicParts/VideoSlider"
import MainItemsBlock from "../components/DynamicParts/MainItemsBlock"

import "../static/css/style.css"
import "../static/css/sty.scss"

export default () => (
	<Container>
		<Layout>
			<Col md="4" className="d-none d-sm-block ">
				<LinkList />
				<PopularRecipeList />
				<SidebarAd />
			</Col>
			<Col md="8" xs="12">
				<MainItemsBlock />
				<HorizontalItemsBlock />
				<VideoList />
			</Col>
		</Layout>
	</Container>
)
