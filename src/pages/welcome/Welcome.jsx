import WelcomeCard from './components/WelcomeCard';
import React from 'react';
import './components/WelcomeCard';

export default function Welcome() {
    return (
        <div className="grid-container" id="grid-container">
            <WelcomeCard styles="cards-one cards" title="TRAINING ACTIVO" link="/dashboard/activetraining" id="cards-one"/>
            
            <WelcomeCard styles="cards-two cards" title="CREAR CURSO" link="/dashboard/create/course" id="cards-two"/>

            <WelcomeCard styles="cards-three cards" title="CREAR TRAINING" link="/dashboard/createTraining" id="cards-three"/>
            
            <WelcomeCard styles="cards-four cards" title="CREAR PROGRAMA" link="/dashboard/crearprograma" id="cards-four"/>
        </div>
    )
}