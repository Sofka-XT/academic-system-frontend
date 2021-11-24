import { connect } from 'react-redux';
import React from 'react';


function Navbar({ user }) {
    return (
        <div className="Navbar" id = "Navbar">
            <img src="https://i.imgur.com/kmc2s6p.png" className="sofka-logo" alt="Sofka logo"></img>
            <div className="right-side" id="right-side">
                <div className="role-container" id="role-container">
                    <h6>{user.role}</h6>
                </div>
                <h5>{user.name}</h5>
                <img className="profile-picture" id="profile-picture" src={user.photoUrl} alt="user profile"></img>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
