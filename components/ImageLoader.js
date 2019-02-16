import React, { Component } from "react"

export default class ImageLoader extends Component {
	state = {
		isImageLoaded: false
	}

	setImageStatus = () => {
		this.setState({
			isImageLoaded: true
		})
	}

	render() {
		const { isImageLoaded } = this.state
		const { src, children } = this.props
		return (
			<div className="image-wrapper">
				<img src={src} alt="my image" onLoad={this.setImageStatus} />
				{!isImageLoaded && <div className="lds-dual-ring" />}
				{children}
			</div>
		)
	}
}
