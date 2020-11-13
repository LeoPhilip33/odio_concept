import React from 'react'
import ContainerTheme from '../../components/containerTheme'
import './live.css';
import MainApp from '../MainApp/MainApp'

const LivesPage = () => {
    return (
        <div> 
            <MainApp />
            <div className="margin_top_containerTheme_live">
                <h1 className="modification_title_container_app"> Tous les thèmes </h1>
                <ContainerTheme />
                <ContainerTheme />
                <ContainerTheme />
            </div>
        </div> 
    )
}

export default LivesPage;