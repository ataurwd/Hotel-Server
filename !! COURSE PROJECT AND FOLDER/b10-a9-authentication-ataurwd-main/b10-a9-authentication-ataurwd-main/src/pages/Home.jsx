import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import HomeCounter from '../components/HomeCounter';
import HomeReview from '../components/HomeReview';
import HomeCard from '../components/HomeCard';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Vocabulary | Home</title>
            </Helmet>
            <div>
                <Header/>
                <HomeAbout/>
                <HomeCounter/>
                <HomeCard/>
                <HomeReview/>
            </div>
        </div>
    );
};

export default Home;