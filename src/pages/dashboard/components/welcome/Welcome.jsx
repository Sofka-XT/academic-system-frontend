import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="grid-container">
            <div className="cards-one">
                <div>
                    <Link to="/">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-one">
                <div>
                    <Link to="/">
                        PROGRAMAS ACTIVOS
                    </Link>
                </div>
            </div>
            <div className="cards-one">
                <div>
                    <Link to="/">
                        
                    </Link>
                </div>
            </div>
            <div className="cards-one">
                <div>
                    <Link to="/">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-one">
                <div>
                    <Link to="/">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
            <div className="cards-one">
                <div>
                    <Link to="/">
                        VER HISTÓRICO DE PROGRAMAS
                    </Link>
                </div>
            </div>
        </div>
    )
}
