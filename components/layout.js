import { Container, Row, Col } from "reactstrap"

// Components
import Header from "./header"
import MainItemsBlock from "./DynamicParts/MainItemsBlock"
import PopularRecipeList from "./DynamicParts/PopularRecipeList"
import VideoList from "./DynamicParts/VideoSlider"

const Layout = () => (
    <Container>
        <Row>
            <Col>
                {/* <img src="../static/image/logo.png" alt="my image" /> */}
                <Header />
            </Col>
        </Row>
        <Row>
            <Col />
        </Row>
        <Row>
            <Col md={3}>
                <PopularRecipeList />
            </Col>
            <Col md={9}>
                <MainItemsBlock />
                <VideoList />
            </Col>
        </Row>
    </Container>
)

export default Layout
