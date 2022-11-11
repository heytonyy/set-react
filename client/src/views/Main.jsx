import React from "react"
import Footer from "../components/Footer"
import Game from "../components/Game"
import Header from "../components/Header"
import Rules from "../components/Rules"
// import NewGame from "../components/NewGame"


const Main = () => {

  return (
    <>
      <Header />
      <Game />
      {/* <NewGame /> */}
      <Footer />
      <Rules />
    </>
  )
}

export default Main