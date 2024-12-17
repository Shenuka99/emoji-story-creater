import React, { useEffect, useState } from 'react'

const ViewEmojiStories = () => {

    const [emojiStory, setEmojiStory] = useState([])

    const getEmojiStory = async () => {
        try {
            const result = await fetch("http://localhost:5000/getStories",{
                method: 'GET',
            })

          
            if(result.status === '200'){
                setEmojiStory(result.data)
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getEmojiStory()
    },[])

  return (
    <div style={{ display: 'flex', alignItems:'center', justifyContent: 'start', width: '40vw', flexDirection: 'column'}}>
        <h2>Your Emoji Stories</h2>
        {emojiStory.length > 0 ? emojiStory.map((story) => {
            <p>{story.story}</p>
        })
    : <p>No stories to view</p>
    }
    </div>
  )
}

export default ViewEmojiStories