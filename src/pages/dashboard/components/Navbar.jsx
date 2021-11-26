import { connect } from 'react-redux';
import React from 'react';
import { apprenticeLinks, coachLinks, logOut} from './NavigateLinks/NavigateLinks';
import { Link, NavLink } from 'react-router-dom';



function Navbar({ user }) {
    const logOutObj = logOut;
    console.log(logOut)
    return (
        <div className="Navbar" id = "Navbar">
            <img src="https://i.imgur.com/kmc2s6p.png" className="sofka-logo" alt="Sofka logo"></img>
            <div className="right-side" id="right-side">
                <div className="role-container" id="role-container">
                    <span>{user.role}</span>
                </div>
                <span>{user.name}</span>
                <img className="profile-picture" id="profile-picture" src={user.photoUrl} alt="user profile"></img>
                <Link 
                className="link" 
                end to={logOutObj.path}> 
                    <span></span>
                </Link>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
