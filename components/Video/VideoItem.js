import { Card, CardBody, CardTitle, Col } from "reactstrap"
import ImageLoader from "../ImageLoader"

class VideoItem extends React.Component {
	state = {
		modalVisible: false,
		imageHash: new Date().getTime()
	}

	toggleModalVisible = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		})
	}

	render() {
		const { video } = this.props
		const { modalVisible, imageHash } = this.state
		return (
			<Col md="3" className="video-item-wrapper">
				<Card
					className="video-item"
					id={`video_${video.id}`}
					onClick={this.toggleModalVisible}>
					<ImageLoader
						src={`${video.image}&time=${imageHash}`}
						alt="Card image cap">
						<div className={`posttype ${video.type}`}>
							<span />
						</div>
					</ImageLoader>

					<CardBody>
						<CardTitle>{video.title}</CardTitle>
					</CardBody>
				</Card>
				<div
					className={
						modalVisible
							? "video-modal modal-visible"
							: "video-modal"
					}>
					<div dangerouslySetInnerHTML={{ __html: video.code }} />
					<span
						className="close-modal"
						onClick={this.toggleModalVisible}
					/>
				</div>
			</Col>
		)
	}
}

export default VideoItem
