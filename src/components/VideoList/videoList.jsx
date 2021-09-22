import React from "react";
import VideoItem from "../VideoItem/videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return(
        <div>
            <h4>Related Videos</h4> 
            {listOfVideos}
        </div>
    )
}

export default VideoList;