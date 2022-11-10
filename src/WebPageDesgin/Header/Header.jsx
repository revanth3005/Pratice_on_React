import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <div className='cont'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4>Revanth</h4>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='mail'>revanth@gmail.com</h4>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;
