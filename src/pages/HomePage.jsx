import React from 'react';
import Navbar from '../components/Navbar'
import ScrollingSubtitle from '../components/ScrollingSubtitle';
import AboutMe from '../components/AboutMe';
import ScrollingSubtitleRight from '../components/ScrollingSubtitleRight';

const HomePage = () => {
    return (
        <>
        <div>
            <Navbar/>
            <ScrollingSubtitle>nice to meet you </ScrollingSubtitle>
            <AboutMe/>
            <ScrollingSubtitleRight>nice to meet you </ScrollingSubtitleRight>
        </div>
        </>
    );
};

export default HomePage;
