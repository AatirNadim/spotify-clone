import React from 'react'
import styles from '../styles/Songrow.module.css'
const Songrow = (props) => {
    const track = props.track
    return (
        <div className={styles.songrow__main}>
            <img src = "" alt = "" className = {styles.songrow__album}/>
            <div className = {styles.songrow__info}>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => {
                        return artist.name
                    }).join(', ')} - {' '}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default Songrow;