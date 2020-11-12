import React, { Component } from 'react';
import MainAPP from '../../components/main_app/Main_app';
import ContainerApp from '../../components/containerApp/ContainerApp';

const HomePage = () => {
    return (
        <div> 
            <MainAPP />
            <ContainerApp />
        </div> 
    )
}

export default HomePage;