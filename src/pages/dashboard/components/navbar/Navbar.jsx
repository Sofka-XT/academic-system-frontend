import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import turnOff from './media/power-on.png';
import { logOut } from '../../../../nav/NavigateLinks';


function Navbar({ user }) {
    const logOutObj = logOut;
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
                id="logout-link"
                to={logOutObj.path}> 
                    <img src={turnOff} alt="turn-off" className = "turn-off"/>
                </Link>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
