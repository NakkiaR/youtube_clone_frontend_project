import React from "react";
import {Grid} from '@mui/material'
import VideoItem from "../VideoItem/videoItem";

const VideoList = ({videos}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video}/>)
    return(
        <Grid>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;