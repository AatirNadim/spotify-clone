import React from 'react'
// import '../../styles/Sidebar.module.css'
import styles from '../../styles/Sidebar.module.css'
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function Sidebar() {
  return (
    // <div className='sidebar__body'>this is the sidebar lbhgsdfgfjgjgjgvcgdzjfjcgvjhbvhjzgfcvyumdsgfchjmsgffnghnbvdvjbfvczsxhvdsjhfbhdsfvbchjsdbvfcjsfbhyjdbdsd </div>
    <div className = {styles.sidebar__body}>
      <img className = {styles.spotify__logo}src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "spotify__logo"/> 
      <SidebarOptions title = {'Home'} Icon = {<HomeIcon/>}/>
      <SidebarOptions title = {'Search'} Icon = {<SearchIcon/>}/>
      <SidebarOptions title = {'Your Library'} Icon = {<LibraryMusicIcon/>}/>
    </div>
    // <div className = "spotify__logo">
      /* */
    // </div>
  )
}

export default Sidebar;