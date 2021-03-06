import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Nav className="nav-bar">
            <img className="icon" alt="ss" width={200} src="logo/BBC_Knowledge_HD.png"/>
            <input className="search-bar" type="text" placeholder="search" />
        </Nav>
    )
}

const Nav = styled.div`
    position:sticky;
    z-index: 20;
    top:0;
    left:0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f7f7f7;

    img{
        margin-left: 10px;
    }

    .search-bar{
        height: 30px;
        width: 200px;
        border-radius: 10px;
        border: none;
        background: #f7f7f7;
        padding-left: 10px;
    }


`


export default Navbar
