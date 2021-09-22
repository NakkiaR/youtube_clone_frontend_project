import React from "react";

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div>
            <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
            </div>
            <div>
                <iframe 
                title="videoPlayer"
                width = '1080'
                height = '720'
                src={videoSrc}>
                </iframe>
            </div>
            <div>
                <h4>{video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>     
        </div>
    )
}

export default VideoDetail;