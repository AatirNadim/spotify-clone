import React from 'react'
// import '../../styles/Sidebar.module.css'
import styles from '../../styles/Sidebar.module.css'
import SidebarOptions from './SidebarOptions';
function Sidebar() {
  return (
    // <div className='sidebar__body'>this is the sidebar lbhgsdfgfjgjgjgvcgdzjfjcgvjhbvhjzgfcvyumdsgfchjmsgffnghnbvdvjbfvczsxhvdsjhfbhdsfvbchjsdbvfcjsfbhyjdbdsd </div>
    <div className = {styles.sidebar__body}>
      <img className = {styles.spotify__logo}src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "spotify__logo"/> 
      <SidebarOptions title = {'Home'}/>
      <SidebarOptions title = {'Search'}/>
      <SidebarOptions title = {'Your Library'}/>
    </div>
    // <div className = "spotify__logo">
      /* */
    // </div>
  )
}

export default Sidebar;