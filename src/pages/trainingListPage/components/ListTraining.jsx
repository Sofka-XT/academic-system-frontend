import React from 'react'
import Training from './Training'
import './ListTraining.css'

function ListTraining({trainings}) {
    return (
        <div className = "list">
            {trainings.map((training, index)=>
                <Training key = {index} training={training}/>
            )}
        </div>
    )
}

export default ListTraining
