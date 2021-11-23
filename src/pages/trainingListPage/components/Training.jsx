import React from 'react'
import './Training.css'

function Training({training}) {
    return (
        <div className = "list">
            <div className = "training-card">
            esta es la info del: {training.name}
            </div>
        </div>
        
    )
}

export default Training
