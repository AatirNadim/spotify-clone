import React from 'react'
import styles from '../styles/Body.module.css'
import Header from './Header';
import Songrow from './Songrow';
import { useStateValue } from './Stateprovider'

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SmokingRoomsTwoTone } from '@mui/icons-material';
function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useStateValue();
  console.log({discover_weekly})
  return (
    <div className={styles.body__main}>
      <Header spotify = {spotify}/>
      <div className = {styles.body__info}>
        <img src = {discover_weekly?.images[0]?.url} alt = ""></img>
        <div className = {styles.body__infoText}>
          <h4>{'PLAYLISTS'}</h4>
          <h2>{'Discover Weekly'}</h2>
          <p>{discover_weekly?.description}</p>
          </div>
      </div>
      <div className = {styles.body__songs}>
        <div className = {styles.body__icons}>
          <PlayCircleFilledIcon className = {styles.body__play}/>
          <FavoriteIcon />
          <MoreHorizIcon/>
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => {
          return <Songrow track = {item.track}/>
        })}
      </div>
    </div>
  )
}

export default Body