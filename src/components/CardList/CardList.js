import React from 'react'
import "./card-list.css"
import Card from '../Card/Card'

const CardList = ({monsters}) => {
  return (

        <div className='Card-list'>

            {
                monsters.map( (monster) => {
                    return(

                        <Card key={monster.id} monster={monster} className='Card-list-item'/>



                    )
                }) 
            }


        </div>
  )
}

export default CardList;
