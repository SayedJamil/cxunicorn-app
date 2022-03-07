import React from 'react'
import ReactPlayer from 'react-player'
import videofroplayer from '../images/PlaceholderVideo.mp4'
function VideoFullPage() {
    return (
        <>
            <ReactPlayer
                style={{ margin: 'auto' }}
                url={videofroplayer}
                width='100vw'
                height='100vh'
                playing={true}
                controls={true}

            />
            
        </>
      
    )
}

export default VideoFullPage