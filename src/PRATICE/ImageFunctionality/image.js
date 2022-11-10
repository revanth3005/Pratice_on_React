import React from 'react'
import './img.css'
function Image() {
  return (
    <div>
        <h1>hello</h1>
        <picture>
            <source media="(min-width:800px )" srcset="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" />
            <source media="(min-width: 400px)" srcset="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="" />
        </picture>
        

    </div>
  )
}

export default Image