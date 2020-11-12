import React from 'react'
import Main_APP from '../../components/main_app/Main_app'
import ContainerTheme from '../../components/containerTheme'
import './live.css';

const LivesPage = () => {
    return (
        <div> 
            <Main_APP />
            <div class="margin_top_containerTheme_live">
                <h1 class="modification_title_container_app"> Tous les thèmes </h1>
                <ContainerTheme />
                <ContainerTheme />
                <ContainerTheme />
            </div>
        </div> 
    )
}

export default LivesPage;