import { useEffect } from "react"
import axios from "axios"
import useGame from "../context/GameContext"

const LoadDeck = () => {
    const { loadDeck, shuffle } = useGame()

    // on game load
    useEffect(() => {
        axios.get("http://localhost:8000/api/cards/")
            .then(res => {
                const deckData = shuffle(res.data)
                loadDeck(deckData)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <></>
    )
}

export default LoadDeck