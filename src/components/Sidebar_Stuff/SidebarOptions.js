import React from 'react'
// import '../../styles/SidebarOptions.module.css'
import styles from '../../styles/SidebarOptions.module.css'
const SidebarOptions = ({ title , Icon }) => {
    // console.log({ desc : 'icon', type : typeof(Icon)});
    return (
        <div className={styles.Sidebar_Options__main}>
            {Icon && <Icon className = {styles.Sidebar_Options__Icon}/>}
            {Icon? <h4 style={{fontWeight : '700'}}>{title}</h4>
            :<p style={{fontWeight : '700'}}>{title}</p>}
            {/* <p>thihterhtirh</p> */}
            {/* this element does not get styled in case the css is not defined for it specifically, the css of the parent element has lower priority than index.css */}
        </div>
    );
}

export default SidebarOptions;