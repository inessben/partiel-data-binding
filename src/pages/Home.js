import React from 'react';
import Logo from '../component/Logo';
import Navigation from "../component/Navigation";


const Home = () => {
    return (
        <div>
            <Navigation />
            <br />
            <Logo />
            <h1 className='title'>Bienvenue sur votre profil</h1>
        </div>
    );
};

export default Home;