import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
function Menu({changeTheme,theme}) {
    return (
        <MenuBar className="menu-bar">
            <Link to="/"><motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="home" src="icon/Home.png" /></Link> 
            <Link to="/post"><motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/Post.png" /></Link> 
            <Link to="/setting"><motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/Setting.png" /></Link> 
            <Link to="/friends"><motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/friends.png" /></Link>
            <Link onClick={()=>changeTheme()}><motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src={theme === 'dark'? 'icon/dark.png':'icon/light.png'} /></Link>  
        </MenuBar>
    )
}

const MenuBar = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f7f7f7;
    >a{
        margin: 25px 0px;
    }
`

export default Menu
