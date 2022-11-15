import React from "react";
import styles from '../styles/Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './Stateprovider'
const Header = ({spotify}) => {
    const [{user}, dispatch] = useStateValue();
    console.log('user -->\n', {user});
    return (
        <div className = {styles.header__main}>
            <div className = {styles.header__left}>
                <SearchIcon className = {styles.header__search}/>
                <input placeholder="Search for Artists, Songs or Podcasts" type='text'
                    className = {styles.header__input}
                />
            </div>
            <div className = {styles.header__right}>
                {/* <AccountCircleIcon style = {{marginRight : '10px'}}/> */}
                <Avatar src = {user?.images[0]?.url} alt = {user?.display_name}
                    style = {{marginRight : '10px'}}
                />
                {/* {'staticLarryBurlonce'} */}
                <h4>{user?.display_name}</h4>
            </div>
        </div>

    );
}
export default Header;