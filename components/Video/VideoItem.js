const VideoItem = ({ video }) => {
    return (
        <div id={`video_${video.id}`}>
            <h3>{video.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: video.code }} />
        </div>
    )
}

export default VideoItem
