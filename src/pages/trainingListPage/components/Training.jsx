import React from 'react'
import { Link,  } from 'react-router-dom';
import './Training.css';

export default function Training({training}) {

    return (
        <div className = "training__grid">
            <div className = "training__program-main-container mt-5">
                <img className="img-training top-image" 
                    src="https://www.publicdomainpictures.net/pictures/290000/nahled/web-hosting.jpg" 
                    alt="imagen training" />
                <br />
                <br />
                <Link className="course" to={`trainingdetail/${training.trainingId}`}> {training.name} </Link>
                <br />
                <br />
                <h6>Coaches:</h6>
                {training.coaches.map((coach, index)=>
                    <h6 key={index}>{coach.name}</h6>
                )}
            </div>
        </div>
    )
}
