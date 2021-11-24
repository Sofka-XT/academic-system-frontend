import { connect } from 'react-redux';
import React from 'react';


const ToggleButton = () => {
    const menu = document.querySelector('#hamburger button');
    menu.addEventListener('click', e => {
        menu.classList.toggle('open');
    });
}

function Navbar({ user }) {
    return (
        <div className="Navbar">
            <img src="https://i.imgur.com/kmc2s6p.png" className="sofka-logo"></img>
            <div className="right-side">
                <div className="role-container">
                    <h6>{user.role}</h6>
                </div>
                <h5>{user.name}</h5>
                <img className="profile-picture" src={user.photoUrl}></img>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
