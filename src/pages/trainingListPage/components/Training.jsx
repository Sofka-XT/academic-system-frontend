import React from 'react'
import { Link } from 'react-router-dom';
import './Training.css'

function Training({training}) {
    return (
        <div className = "list">
            <div className = "training-card">
                <img className="img-training" src="https://www.publicdomainpictures.net/pictures/290000/nahled/web-hosting.jpg" alt="imagen training" />
                <br />
                <br />
                <Link className="link-type" to=""><h6>{training.name}</h6></Link>
                <h6>Coaches:</h6>
                {training.coaches.map((coach, index)=>
                    <h6 key={index}>{coach.name}</h6>
                )}
            </div>
        </div>
        
    )
}

export default Training