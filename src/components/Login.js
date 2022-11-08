import React from 'react'
import '../styles/Login.css'

import { authEndpoint, loginUri } from './spotify'
const Login = () => {
  return (
    <div className='login'>
        {/* {'in the login page'} */}
        <img src = 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt = ''
        />
        <a href={loginUri}>{'LOGIN WITH SPOTIFY'}</a>
    </div>
  )
}

export default Login;