import React from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


function TrainingDetails({trainings}) {
    

    const params = useParams();
    //let training = courses.filter((item) => item.id === params.courseid)[0];

    return (
        <div>
            Hola mundo
        </div>
    )
}


const mapStateToProps = (state) => ({
    loading: state.coursesReducer.loading,
    hasError: state.coursesReducer.error,
    courses: state.coursesReducer.courses,
  });
  export default connect(mapStateToProps)(TrainingDetails);