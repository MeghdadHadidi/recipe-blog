import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import VideoItemContainer from "./VideoItemContainer"

// Actions
import { getVideos } from "../../actions/videos"

class VideoList extends Component {
    componentDidMount() {
        this.props.getVideos()
    }

    render() {
        const { items, render } = this.props
        return (
            <>
                {items.length > 0 &&
                    items.map(video => (
                        <VideoItemContainer
                            key={video.id}
                            render={render}
                            video={video}
                        />
                    ))}
            </>
        )
    }
}

VideoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    getVideos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    items: state.videos.items,
    loading: state.videos.fetching
})

export default connect(
    mapStateToProps,
    { getVideos }
)(VideoList)
