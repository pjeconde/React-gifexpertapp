import React from 'react'

const GifGridItem = ({ id, title, url}) => {
    console.log(id);

    return (
    <div className='card'>
        <p>{title}</p>
        <img src={url} alt="My Awesome Image"/> 
    </div>
  )
}

export default GifGridItem
