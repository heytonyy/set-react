import React from 'react'
import styles from '../style/game.module.css'
import RulesExample from './RulesExample'

const Rules = () => {
  // example endpoint response from API
  const examples = [
    {
      "_id": "63667a744c499a4bf83afeb6",
      "number": 1,
      "shape": "diamond",
      "color": "red",
      "fill": "striped",
      "createdAt": "2022-11-05T15:00:04.018Z",
      "updatedAt": "2022-11-05T15:00:04.018Z",
      "__v": 0
    },
    {
      "_id": "63667a984c499a4bf83afebb",
      "number": 1,
      "shape": "squiggle",
      "color": "red",
      "fill": "solid",
      "createdAt": "2022-11-05T15:00:40.615Z",
      "updatedAt": "2022-11-05T15:00:40.615Z",
      "__v": 0
    },
    {
      "_id": "63667ac84c499a4bf83afec5",
      "number": 1,
      "shape": "oval",
      "color": "red",
      "fill": "open",
      "createdAt": "2022-11-05T15:01:28.016Z",
      "updatedAt": "2022-11-05T15:01:28.016Z",
      "__v": 0
    }
  ]

  return (
    <div className={styles.rules}>
      <p> <span className={styles.boldUnder}>Rules</span>:</p>
      <p>The objective of the game is to find a <span className={styles.boldUnder}>set</span> of cards.</p>
      <p>A <span className={styles.boldUnder}>set</span> consists of three cards satisfying all of these conditions:</p>
      <ul>
        <li>They all have the <span className={styles.boldUnder}>same</span> number of shapes or have <span className={styles.boldUnder}>three different</span> number of shapes.</li>
        {/* <li className={styles.nobullets}>(1-3)</li> */}
        <li>They all have the <span className={styles.boldUnder}>same</span> shape or have <span className={styles.boldUnder}>three different</span> shapes.</li>
        {/* <li className={styles.nobullets}>(diamond, squiggle, oval)</li> */}
        <li>They all have the <span className={styles.boldUnder}>same</span> fill or have <span className={styles.boldUnder}>three different</span> fills.</li>
        {/* <li className={styles.nobullets}>(striped, solid, open)</li> */}
        <li>They all have the <span className={styles.boldUnder}>same</span> color or have <span className={styles.boldUnder}>three different</span> colors.</li>
        {/* <li className={styles.nobullets}>(red, green, purple)</li> */}
      </ul>
      <p>The following is an example of a set:</p>

      <div className={styles.exampleBoard}>
        {
          examples.map((p, i) => <RulesExample key={i} card={p} />)
        }
      </div>

      <ul>
        <li>They all have the same number of shapes (<strong>1</strong>)</li>
        <li>They all have three different shapes (<strong>diamond, squiggle, oval</strong>)</li>
        <li>They all have three different fills (<strong>striped, solid, open</strong>)</li>
        <li>They all have the same color (<strong>red</strong>)</li>
      </ul>
      <p>The board will have exactly <span className={styles.boldUnder}>12 cards</span> in play. If you click 3 cards that are a set, the cards are removed from the board and 3 new cards are drawn from the deck and placed on the board.</p>
      <p>If you want a new board or cant find a set, press '<span className={styles.boldUnder}>New Board</span>' to get 12 new cards on the board. The previous cards are discarded.</p>
      <p>There are <span className={styles.boldUnder}>81 cards</span> in the deck. You will have <span className={styles.boldUnder}>10 mins</span> to find as many sets as possible.</p>
      <p>If you run out of time or the deck runs of cards, <span className={styles.boldUnder}>the game is over</span>.</p>
      <p>When ready, press the '<span className={styles.boldUnder}>Start</span>' button to play. Enjoy!</p>
    </div>
  )
}

export default Rules