import { Card, CardBody, CardTitle, Col } from "reactstrap"
import ImageLoader from "../ImageLoader"

class VideoItem extends React.Component {
	state = {
		modalVisible: false
	}

	toggleModalVisible = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		})
	}

	render() {
		const { video } = this.props
		const { modalVisible } = this.state
		return (
			<Col md="3">
				<Card
					className="video-item"
					id={`video_${video.id}`}
					onClick={this.toggleModalVisible}>
					<ImageLoader
						src={`${video.image}&time=${new Date().getTime()}`}
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
