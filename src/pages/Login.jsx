import React, { useState, useEffect } from 'react'
import '../scssPages/login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logInU } from '../store/features/auth/authSlice'

const Login = () => {

  // const navi = useNavigate()
  const navigate=useNavigate()

  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: ''
  })

  //Saves the data
  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  //submits the form
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(logInU(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if(submitted && user) {
      navigate('/')
    }
  }, [submitted, user])




  return (
    <div className="container-login">
      <div id='login'>
        <form className='form-login' noValidate onSubmit={handleSubmit}>
          <div>
            <h1>Please Login to Your Account</h1>
          </div>
          <div>
            <label className='email' htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <h3>Forgot Your Password ?</h3>
            <label className='password' htmlFor="passw">Password*</label>
            <input type="password" name="passw" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" name="checkbox" value="checkbox" />Please keep me logged in</label>
          </div>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p className='danger'>{error} </p>}
            <button className='btn btn-submit' type='submit'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login