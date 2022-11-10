import React from 'react'
import Menulist from './Menulist'
import Routing from './Routing'

function Menu() {
  return (
    <div className='menu'>
        <div className='container'>
            <div className='row'>
                <div className="col-md-3">
                    <Menulist/>
                </div>
                <div className="col-md-9">
                    <Routing/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu
