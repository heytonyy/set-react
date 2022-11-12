import React from "react"
import Footer from "../components/Footer"
import Game from "../components/Game"
import Header from "../components/Header"
import Rules from "../components/Rules"
// import OldGame from "../components/old-components/OldGame"


const Main = () => {

  return (
    <>
      <Header />
      <Game />
      {/* <OldGame /> */}
      <Footer />
      <Rules />
    </>
  )
}

export default Main