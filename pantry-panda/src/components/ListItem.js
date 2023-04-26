import React from 'react'

export const ListItem = ({ lineThrough, toggle, name }) => {
  const styles = {
    textDecoration: lineThrough ? 'line-through' : 'none'
  }

  return (
    <div 
      className='list-item' 
      style={styles}
      onClick={() => toggle()}
    >
      {name}
    </div>
  )
}
