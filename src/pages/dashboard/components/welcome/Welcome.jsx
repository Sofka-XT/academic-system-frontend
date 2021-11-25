import WelcomeCard from './WelcomeCard';
import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className="grid-container" id="grid-container">
            <WelcomeCard styles="cards-one cards" title="VER HISTÓRICO DE PROGRAMAS" link="/dashboard/programstory" id="cards-one"/>
            
            <WelcomeCard styles="cards-two cards" title="PROGRAMAS ACTIVOS" link="/dashboard/activeprogram" id="cards-two"/>

            <WelcomeCard styles="cards-three cards" title="CREAR PROGRAMAS" link="/dashboard/program" id="cards-three"/>
            
            <WelcomeCard styles="cards-four cards" title="HISTÓRICO TRAINING" link="/dashboard/trainingstory" id="cards-four"/>
            
            <WelcomeCard styles="cards-five cards" title="TRAINING ACTIVOS" link="/dashboard/activetraining" id="cards-five"/>
            
            <WelcomeCard styles="cards-six cards" title="CREAR TRAINING" link="/dashboard/training" id="cards-six"/>
        </div>
    )
}