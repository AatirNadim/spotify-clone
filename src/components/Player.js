import React from "react";
// import '../styles/Player.module.css'
import styles from '../styles/Player.module.css'
import Body from "./Body";
import Sidebar from "./Sidebar_Stuff/Sidebar";
import Footer from "./Footer";

const Player = ({spotify}) => {
  return (
    <div className = {styles.player__body}>
      {/* {'this is the body of the player'} */}
      <div className = {styles.player__main}>
        <Sidebar/>
        <Body spotify = {spotify}/>
      </div>
      <Footer/>
      {/* // footer */}
    </div>
  );
}

export default Player;