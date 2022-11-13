import React from 'react'
// import '../styles/Footer.module.css'
import styles from '../styles/Footer.module.css'

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';  
import ShuffleIcon from '@mui/icons-material/Shuffle';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import Shuffle from '@mui/icons-material/Shuffle';
function Footer() {
  return (
    <div className={styles.footer__main}>
      <div className= {styles.footer__left}>
        <img className = {styles.album__logo} src = "" alt = "song thumb"/>
        <div className = {styles.footer__songInfo}>
          <h4 className={styles.footer__left__songInfo}>{'song name'}</h4>
          <p className = {styles.footer__left__artistInfo}>{'artist info'}</p>
        </div>

      </div>
      <div className= {styles.footer__center}>
        <ShuffleIcon className = {styles.Playbar__shuffle}/>
        <SkipPreviousIcon className = {styles.Playbar__prev}/>
        <PlayCircleIcon className = {styles.Playbar__play} style = {{fontSize: ""}}/>
        <SkipNextIcon className = {styles.Playbar__next}/>
        <RepeatIcon className = {styles.Playbar__repeat}/>
      </div>
      <div className= {styles.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
              <QueueMusicRoundedIcon/>
          </Grid>
          <Grid item>
              <VolumeDownIcon />
          </Grid>
          <Grid item xs>
              <Slider 
              // size='small'
              aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>  
      </div>
    </div>
  )
}

export default Footer