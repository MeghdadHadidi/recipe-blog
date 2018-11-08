import { Container, Row, Col } from "reactstrap"

// Components
import Header from "./header"
import MainItemsBlock from "./DynamicParts/MainItemsBlock"
import PopularRecipeList from "./DynamicParts/PopularRecipeList"

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
            </Col>
        </Row>
    </Container>
)

export default Layout
