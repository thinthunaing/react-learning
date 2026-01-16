import { useState, useEffect, use } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

   const [allMemes, setAllMemes] = useState([])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        const fetchMemes = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        fetchMemes()
    }, [])

    function flipImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)     
        const url = allMemes[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }   

    
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                   <input
                    type="text"
                    placeholder="One does not simply"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                   <input
                    type="text"
                    placeholder="Walk into Mordor"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                    />
                </label>
                <button onClick={flipImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            
        </main>
    )
}