import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const FormValidation = () => {

    const[user,setUser]=useState({name:"",email:"",password:""})  
    const onChangeHandel = (e) =>{
        setUser(
            {...user,[e.target.name]:[e.target.value]}
        )
    }
    let alphaExp=/^[a-zA-Z]+$/
    let mailExp=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9]$/

    const onFormSubmit = (e) =>{
        e.preventDefault()
        if(user.name == ""){
            document.getElementById('nameMsg').innerHTML='please enter Name'
        }else{
            let nameValue=user.name.toString();
            if(!nameValue.match(alphaExp)){
                document.getElementById('nameMsg').innerHTML='please enter Alphabates only'
            }else{
                document.getElementById('nameMsg').innerHTML=''
            }   
        }
        if(user.password==""){
            document.getElementById('passMsg').innerHTML='please enter Password'
        }else{
            let pass=user.password.toString()
            let len=pass.length
            if(len <= 7){
                document.getElementById('passMsg').innerHTML='please enter more than 8 chracters'
            }else{
                document.getElementById('passMsg').innerHTML=''
            }
        }
        if(user.email == ""){
            document.getElementById('mailMsg').innerHTML='please enter mail'
            }else{
                let mailValue=user.email.toString()
                if(!mailValue.match(mailExp)){
                    document.getElementById('mailMsg').innerHTML='Invalid format'
                }else{
                    document.getElementById('mailMsg').innerHTML=''
                }

        }
    }

  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col-md-12">

            <form className="form mt-4"  onSubmit={onFormSubmit}>
              <div className="col-md-4">
              <label className='form-label'>Enter your Name</label>
              <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={user.name}
                    className="form-control"
                    onChange={onChangeHandel}
                  />
                  <span id='nameMsg' style={{'color':'red'}}></span>
              </div>
              <div className="col-md-4 mt-4">
                <label className='form-label'>Enter your Email</label>
              <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={user.email}
                    className="form-control "
                    onChange={onChangeHandel}
                  />
                  <span id='mailMsg' style={{'color':'red'}}></span>
              </div>
              <div className="col-md-4 mt-4">
              <label className='form-label'>Enter your Password</label>
              <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    className="form-control"
                    onChange={onChangeHandel}
                  />
                  <span id='passMsg' style={{'color':'red'}}></span>
              </div>
              <div className="co-md-4 mt-4">
                <input type="submit" value="Submit" className='btn btn-primary' />

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FormValidation