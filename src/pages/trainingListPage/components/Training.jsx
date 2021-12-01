import React from 'react'
import { Link,  } from 'react-router-dom';
import './Training.css';
import { connect } from 'react-redux';
import { roleVerifier } from '../../trainingDetailsPage/utils/routeVerifier';



function Training({training, user}) {

    return (
        <div className = "list">
            <div className = "training-card">
                <img className="img-training" 
                    src="https://www.publicdomainpictures.net/pictures/290000/nahled/web-hosting.jpg" 
                    alt="imagen training" />
                <br />
                <br />
                <Link className="course" to={roleVerifier(user.role, training.trainingId)}> {training.name} </Link>
                <h6>Coaches:</h6>
                {training.coaches.map((coach, index)=>
                    <h6 key={index}>{coach.name}</h6>
                )}
            </div>
        </div>
        
    )
}

const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(Training);
