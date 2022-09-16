import React from 'react'
import "./Card.css"

const Card = ({monster}) => {

  const {name, id, email} = monster;

  return (
    <div className='Card-list-item'>

        <img alt={`monster-image ${id}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <h4>{email}</h4>
      
    </div>
  )
}

export default Card
