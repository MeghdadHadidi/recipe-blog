import React, { Component } from "react"
import VideoList from "../Video/VideoList"

class VideoSlider extends Component {
	state = {
		sliderMargin: 0,
		animateRatio: 170,
		maxSliderMove: 170 * 8
	}

	componentDidMount() {
		const videoListWidth = this.refs.listContainer.outerWidth
		const videoItemWidth = this.refs.querySelector(
			".video-list-container .video-item-wrapper"
		)[0].outerWidth
		this.setState({
			videoListWidth,
			videoItemWidth
		})
	}

	handleSliderNext = () => {
		this.setState({
			sliderMargin: this.sliderMargin - animateRatio
		})
	}

	handleSliderPrev = () => {
		this.setState({
			sliderMargin: this.sliderMargin + animateRatio
		})
	}

	render() {
		return (
			<div className="video-slider-wrapper">
				<div className="navigation">
					<span onClick={this.handleSliderPrev} className="prev" />
					<span onClick={this.handleSliderNext} className="next" />
				</div>
				<div className="video-slider">
					<VideoList
						ref="videoSlider"
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
