import { Link } from 'react-router-dom';
import React from 'react';

const WelcomeCard = ( props ) => {
    return (
        <>
            <div className={props.styles} id={props.id}>
                <div>
                    <Link to={props.link}>
                        {props.title}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WelcomeCard
