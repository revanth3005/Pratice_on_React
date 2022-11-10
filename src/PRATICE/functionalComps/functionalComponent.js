import React from 'react'
import './One.css'

export default function FunctionalComponent(props) {
  return (
    <div className='head'>
        <h1>Welcome to Info {props.name}</h1>
        {/* getting the values from child to access by using the props keyword 
        whatever the value that we pass in the name of name that will excute here  */}
    </div>
  )
}

