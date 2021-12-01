import React from 'react'
import ApprenticeProfile from './ApprenticeProfile'

const ListProfile = (profiles) => {
    return (
        <div className = "list">
            {profiles.map((profile, index)=>
                <ApprenticeProfile key = {index} training={profile}/>
            )}
        </div>
    )
}

export default ListProfile;
