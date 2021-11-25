import { connect } from 'react-redux';
import React from 'react';


function Navbar({ user }) {
    return (
        <div className="Navbar" id = "Navbar">
            <img src="https://i.imgur.com/kmc2s6p.png" className="sofka-logo" alt="Sofka logo"></img>
            <div className="right-side" id="right-side">
                <div className="role-container" id="role-container">
                    <span>{user.role}</span>
                </div>
                <span>{user.name}</span>
                <img className="profile-picture" id="profile-picture" src={user.photoUrl} alt="user profile"></img>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
