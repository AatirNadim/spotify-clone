import React from 'react'
// import '../styles/Body.module.css'
import styles from '../styles/Body.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
function Body({spotify}) {
  return (
    <div className={styles.body__main}>
      <Headers spotify = {spotify}/>
    </div>
  )
}

export default Body