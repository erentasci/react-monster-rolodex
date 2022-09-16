import React from 'react'
import "./searchBox.css"

const SearchBox = ({onChange}) => {
  return (
    <div className='Search-box'>
        <input  onChange={onChange} className='Search-box_input'  type="text" placeholder='Search a monster..'/>
    </div>
  )
}

export default SearchBox
