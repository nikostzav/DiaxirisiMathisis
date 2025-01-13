import React from 'react'
import './Options.css'
import { useDrag } from 'react-dnd'
function Options({id,text}) {
   
  const [{isDragging},drag] = useDrag(() => ({
    type: "div",
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
  }))  
  return (
    <div className='options' ref={drag}>{text}</div>
  )
}

export default Options