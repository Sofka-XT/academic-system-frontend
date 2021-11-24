import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="grid-container">
            <div className="cards-one">
                <div>
                    <Link to="/dashboard/programstory">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-two">
                <div>
                    <Link to="/dashboard/activeprogram">
                        PROGRAMAS ACTIVOS
                    </Link>
                </div>
            </div>
            <div className="cards-three">
                <div>
                    <Link to="/dashboard/program">
                        CREAR PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-four">
                <div>
                    <Link to="/dashboard/programstory">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-five">
                <div>
                    <Link end to="/dashboard/activetraining">
                        TRAINING ACTIVOS
                    </Link>
                </div>
            </div>
            <div className="cards-six">
                <div>
                    <Link to="/dashboard/training">
                        CREAR TRAINING
                    </Link>
                </div>
            </div>
        </div>
    )
}
