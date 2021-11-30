import React from 'react'
import { Link,  } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './Training.css';
import { connect } from 'react-redux';
import { roleVerifier } from '../../trainingDetailsPage/utils/routeVerifier';



function Training({training, user}) {

    const navigate = useNavigate();

    return (
        <div className = "list">
            <div className = "training-card">
                <img className="img-training" src="https://www.publicdomainpictures.net/pictures/290000/nahled/web-hosting.jpg" alt="imagen training" />
                <br />
                <br />
                <a className="course"
                onClick={()=>{navigate(roleVerifier(user.role, training.trainingId))}} >{training.name}</a>
                {/*<Link className="link-type" to=""><h6>{training.name}</h6></Link>*/}
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
