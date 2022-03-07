import React, { useEffect, useState } from 'react'
import '../App.css'
import VideoComponent from './videocomponent'
function HomePage() {
    const [apiData, setApiData] = useState([])
    const fetchData = async () => {
        const response = await fetch("https://api.sampleapis.com/futurama/episodes")
        const data = await response.json()
        setApiData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(apiData)
    return (
        <div className='homePage'>
            <h2 className='title'>CX Unicorn App</h2>
            {apiData.length > 0 && (
                <div className='renderVideoCards'>
                    {apiData.map(user => (
                        <>
                            <VideoComponent title={user.title} author={user.writers} date={user.originalAirDate} desc={user.desc} />
                        </>
                    ))}
                </div>

            )}
            <VideoComponent />
        </div>
    )
}

export default HomePage