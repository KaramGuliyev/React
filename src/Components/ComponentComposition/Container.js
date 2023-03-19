import React from 'react'

// Create a Container component that renders its children within a div tag. 
// Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.

export default function Container(props) {
  return (
    <div className='redBorder whiteBackground'>{props.children}</div>
  )
}
