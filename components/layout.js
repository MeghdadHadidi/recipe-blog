import { Container, Row, Col } from "reactstrap"

// Components
import Header from "./header"
import MainItemsBlock from "./DynamicParts/MainItemsBlock"
import PopularRecipeList from "./DynamicParts/PopularRecipeList"
import LinkList from "./DynamicParts/LinkList"
import HorizontalItemsBlock from "./DynamicParts/HorizontalItemsBlock"
import VideoList from "./DynamicParts/VideoSlider"
import TopAd from "./StaticParts/TopAd"
import LeftAd from "./StaticParts/LeftAd"
import SidebarAd from "./StaticParts/SideAd"


const Layout = () => (
    <div className="page-wrapper">
        <Row>
            <Col md="2" className="d-none d-lg-block">
                <div className="leftAd-wrapper row">
                    <LeftAd />
                </div>
            </Col>
            <Col md="10" xs="12" sm="12" className="page">
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <TopAd />
                    </Col>
                </Row>
                <Row className="m-t-20">
                    
                    <Col md="4" className="d-none d-sm-block "> 
                        <LinkList />
                        <SidebarAd />
                        <PopularRecipeList />
                    </Col>
                    <Col md="8" xs="12">
                        <MainItemsBlock />
                        <HorizontalItemsBlock />  
                        <VideoList />
                    </Col>

                </Row>
            </Col>
        </Row>

        

    </div>
)

export default Layout
