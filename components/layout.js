import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

// Components
import Head from "next/head"
import Header from "./header"

import TopAd from "./StaticParts/TopAd"
import LeftAd from "./StaticParts/LeftAd"

class Layout extends React.Component {
	render() {
		const { loading, children } = this.props
		return (
			<>
				<Head>
					<title>My page title</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
				</Head>
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
							<Row className="m-t-20">{children}</Row>
						</Col>
					</Row>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ recipes }) => ({
	loading: !recipes.fetched
})

export default connect(
	mapStateToProps,
	{}
)(Layout)
