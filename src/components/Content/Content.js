import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components';
import Cards from '../Card/Cards';

function Content() {
    return (
        <ContentBody>
            <Navbar />
            <Cards />
        </ContentBody>
    )
}

const ContentBody = styled.div`
        flex:12;
        background: #f5fffe;
        overflow: auto;
`

export default Content