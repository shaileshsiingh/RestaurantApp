import React from 'react'
import classes from './Card.module.css'

function Card(props) {
  return (
    <div>
    <div className={classes.card}>{props.children}</div>
    </div>
  )
}

export default Card