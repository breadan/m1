import React, {Fragment} from 'react';
import styles from './Home.module.css';
import Styled from 'styled-components';

const TitleStyle = Styled.h2 `
    font-size: 25px;
    color:blue;

`;

export const Home = () => {


    const h1Style = {
        color: 'red',
        fontSize: '15px',
        backgroundColor: 'black'
    }
    const pStyle = {
        color: 'green'
    }



    return <Fragment>
        <h1 style={h1Style} className='one'>hi there</h1>
        <p style={pStyle}>Breadan</p>

        <p style={{color: 'red'}}>Developer</p>

        {/* style module */}
        <p className= {styles.title}>We Will be Developer</p>

        {/* styled Component */}

        <TitleStyle>we will developed our self</TitleStyle>


    </Fragment>
} 