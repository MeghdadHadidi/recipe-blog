import React, { Component } from "react"
import VideoList from "../Video/VideoList"

class VideoSlider extends Component {
	state = {
		sliderMargin: 0,
		animateRatio: 170,
		maxSliderMove: 170 * 8
	}

	componentDidMount() {
		const videoListWidth = this.refs.videoSlider.querySelector(
			".video-list-container"
		).clientWidth
		const videoItemElement = this.refs.videoSlider.querySelector(
			".video-list-container .video-item-wrapper"
		)

		if (videoItemElement) {
			this.setState({
				videoListWidth,
				videoItemElement: videoItemElement.clientWidth
			})
		}
	}

	handleSliderNext = () => {
		this.setState({
			sliderMargin: this.state.sliderMargin - animateRatio
		})
	}

	handleSliderPrev = () => {
		this.setState({
			sliderMargin: this.state.sliderMargin + animateRatio
		})
	}

	render() {
		const { sliderMargin } = this.state
		return (
			<div className="video-slider-wrapper">
				<div className="navigation">
					<span onClick={this.handleSliderPrev} className="prev" />
					<span onClick={this.handleSliderNext} className="next" />
				</div>
				<div ref="videoSlider" className="video-slider">
					<VideoList
						style={{ marginLeft: `${sliderMargin}px` }}
						cat="3"
						count={4}
					/>
				</div>
			</div>
		)
	}
}

export default VideoSlider
