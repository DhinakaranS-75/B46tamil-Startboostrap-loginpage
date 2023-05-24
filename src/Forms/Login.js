import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <div className='container'>
        <div className='row col-md-8'>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control border-danger" id="exampleInputPassword1"  required/>
          </div>
            <div>
              <a href='#'>Forgot your password? </a>
            </div>
          <div className='login-bottom'>
            <div class="mb-3 form-check">
              <input type="checkbox" className="form-check-input check__box" id="exampleCheck1" />
              <label className=" form-check-label " for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          
        </form>
        </div>
      </div>
      
        
    </div>
  )
}

export default Login;
