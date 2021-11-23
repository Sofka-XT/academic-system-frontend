import React from 'react'
import { connect } from 'react-redux';

function Navbar( { user } ) {
    console.log(user);
    return (
        <div className = "Navbar">
            <img src = "https://i.imgur.com/kmc2s6p.png" className = "sofka-logo"></img>
            <div className = "right-side">
                <h6>{user.tipo}</h6>
                <h5>{user.name}</h5>
                <img className = "profile-picture" src = {user.photoUrl}></img>
            </div>
        </div>
    )
}

const mapState = (state) => ({
	user: state.authReducer.user,
});

export default connect(mapState)(Navbar);
