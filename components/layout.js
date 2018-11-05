
import { Container, Row, Col } from 'reactstrap';
import Header from "./header"



const Layout = () => (
    <Container>
        <Row>
            <Col>
                {/* <img src="../static/image/logo.png" alt="my image" /> */}
                <Header />
            </Col>
            
        </Row>
        
    </Container>
)

export default Layout