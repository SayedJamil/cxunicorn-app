
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import videofroplayer from '../images/PlaceholderVideo.mp4'
import '../styles/videocard.css'


function VideoComponent({ title, date, author, desc }) {

    return (
        <div>
            <Card className='videoCardComp'>
                <ReactPlayer
                    style={{ margin: 'auto' }}
                    url={videofroplayer}
                    width='95%'
                    height='20rem'
                    playing={false} />
                <Card.Body className='cardBody'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='limittext'>
                        {desc}
                    </Card.Text>
                    <div className='cardBottom'>
                        <Card.Text className=''>
                            {date}
                        </Card.Text>
                        <Card.Text className=''>
                            {author}
                        </Card.Text>
                    </div>

                    <Link to='/fullvideo'>  <button className='cardButton'>Play</button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default VideoComponent