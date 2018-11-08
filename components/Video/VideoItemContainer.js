import PropTypes from "prop-types"

// Components
import VideoItem from "./VideoItem"

const VideoItemContainer = props => {
    const { render, video } = props

    return (
        <>
            {render && render(video)}
            {!render && <VideoItem video={video} />}
        </>
    )
}

VideoItemContainer.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired
    }).isRequired
}

export default VideoItemContainer
