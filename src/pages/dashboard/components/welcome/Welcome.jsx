import WelcomeCard from './WelcomeCard';
import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className="grid-container" id="grid-container">
            <WelcomeCard styles="cards-one cards" title="TRAINING ACTIVO" link="/dashboard/activetrainingcoach" id="cards-one"/>
            
            <WelcomeCard styles="cards-two cards" title="CREAR CURSO" link="/dashboard/create/course" id="cards-two"/>

            <WelcomeCard styles="cards-three cards" title="CREAR TRAINING" link="/dashboard/training" id="cards-three"/>
            
            <WelcomeCard styles="cards-four cards" title="CREAR PROGRAMA" link="/dashboard/crearprograma" id="cards-four"/>
        </div>
    )
}