import WelcomeCard from './WelcomeCard';
import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className="grid-container" id="grid-container">
            <WelcomeCard styles="cards-one card" title="VER HISTÓRICO DE PROGRAMAS" link="/dashboard/programstory" id="cards-one"/>
            
            <WelcomeCard styles="cards-two card" title="PROGRAMAS ACTIVOS" link="/dashboard/activeprogram" id="cards-two"/>

            <WelcomeCard styles="cards-three card" title="CREAR PROGRAMAS" link="/dashboard/program" id="cards-three"/>
            
            <WelcomeCard styles="cards-four card" title="HISTÓRICO TRAINING" link="/dashboard/trainingstory" id="cards-four"/>
            
            <WelcomeCard styles="cards-five card" title="TRAINING ACTIVOS" link="/dashboard/activetraining" id="cards-five"/>
            
            <WelcomeCard styles="cards-six card" title="CREAR TRAINING" link="/dashboard/training" id="cards-six"/>
        </div>
    )
}