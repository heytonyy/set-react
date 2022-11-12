import { useEffect } from "react"
import axios from "axios"
import useGame from "../context/GameContext"

const LoadDeck = () => {
    const { loadDeck } = useGame()

    // on game load
    useEffect(() => {
        axios.get("http://localhost:8000/api/cards/")
            .then(res => {
                const deckData = shuffle(res.data)
                loadDeck(deckData)
            })
            .catch(err => console.log(err))
    }, [])

    // shuffle algorithm
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex
        // while there remain elements to shuffle.
        while (currentIndex !== 0) {
            // pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            // swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        return array
    }
    return (
        <></>
    )
}

export default LoadDeck