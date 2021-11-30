import React from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


function TrainingDetails({trainings}) {
    const params = useParams();
    const { apprentices, name } = trainings.filter((item) => item.trainingId === params.trainingid)[0];
    console.log("Apprentices: ",  apprentices)
    console.log("name: ",  name)
    return (
        <div>
            Hola mundo
        </div>
    )
}


const mapStateToProps = (state) => ({
    trainings: state.activeTrainingReducer.activeTrainings
  });
  export default connect(mapStateToProps)(TrainingDetails);