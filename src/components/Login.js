import React from 'react'
// import '../styles/Login.module.css'
import styles from '../styles/Login.module.css'
import { authEndpoint, loginUri } from './spotify'
const Login = () => {
  return (
    <div className={styles.login}>
        {/* {'in the login page'} */}
        <img src = 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt = 'spotify banner '
        />
        <a href={loginUri} style={{textDecoration: 'none'}}>{'LOGIN WITH SPOTIFY'}</a>
    </div>
  )
}

export default Login;