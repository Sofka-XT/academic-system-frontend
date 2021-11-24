import { connect } from 'react-redux';
import React from 'react';
import '../Animations.css';

const ToggleButton = () => {
    const menu = document.querySelector('#hamburger button');
    menu.addEventListener('click', e => {
        menu.classList.toggle('open');
    });
}

function Navbar({ user }) {
    return (
        <div className="Navbar">
            <div>
                <div id="hamburger">
                    <button onClick={() => ToggleButton()}>
                        <span class="top-line"></span>
                        <span class="middle-line"></span>
                        <span class="bottom-line"></span>
                    </button>
                </div>
            </div>
            <img src="https://i.imgur.com/kmc2s6p.png" className="sofka-logo"></img>
            <div className="right-side">
                <h6>{user.tipo}</h6>
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
