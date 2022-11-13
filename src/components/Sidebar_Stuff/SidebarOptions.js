import React from 'react'
// import '../../styles/SidebarOptions.module.css'
import styles from '../../styles/SidebarOptions.module.css'
const SidebarOptions = ({ title , Icon }) => {
    return (
        <div className={styles.Sidebar_Options__main}>
            <span>{Icon}</span><p>{title}</p>
        </div>
    );
}

export default SidebarOptions;