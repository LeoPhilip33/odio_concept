import React from 'react'
import ContainerTheme from '../../components/containerTheme'
import './live.css';
import Main_APP from '../main_app/Main_app'

const LivesPage = () => {
    return (
        <div> 
            <Main_APP />
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