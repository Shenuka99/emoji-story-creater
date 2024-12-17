
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const EmojiPickerComponent = () => {

    const [emojiStory, setEmojiStory] = useState([])

    const clickHandler = (emojiParam) => {
        let emoji = emojiParam.emoji

        setEmojiStory( emojiStory => [... emojiStory, emoji])
    }

    const submitEmojiStory = async () => {
        try {
            const result = await fetch("http://localhost:5000/addStory",{
                method: 'POST',
                body: {
                    
                    story: emojiStory.join("")}
            })

            setEmojiStory([])
            if(result.status === '200'){
                setEmojiStory([])
            }

        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50vw'}}>
            <EmojiPicker onEmojiClick={clickHandler}/>

            <p style={{ marginTop: '20px'}}>{emojiStory}</p>

            <button style={{ marginTop: '20px'}} onClick={submitEmojiStory}>Create your Emoji story</button>
        </div>
    )
}

export default EmojiPickerComponent