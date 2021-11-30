import React from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import '../trainingDetailsPage/TrainingDetails.css'

function TrainingDetails({trainings}) {
    const params = useParams();
    const { apprentices, name, coaches } = trainings.filter((item) => item.trainingId === params.trainingid)[0];
    console.log("Apprentices: ",  apprentices)
    console.log("name: ",  name)
    console.log("coaches: ",  coaches)

    const renderCoaches = () => {

        return coaches.map(coach => {
            return<div className="card-coach">
                <div className="card-coach-left" align="center">{coach.name}</div>
                <div className="card-coach-right" align="center">{coach.emailAddress}</div>
            </div>
            
        })
    }

    const renderApprentices = () => {

        return apprentices.map(apprentice => {
            return<tr onClick={() => {console.log('click')}}>
                <td>{apprentice.name}</td>
                <td>{apprentice.emailAddress}</td>
                <td>{apprentice.phoneNumber}</td>
            </tr>
        })
    }
    return (
        <div className="p-5">
            <h1>{name}</h1>
            <hr className="hr mb-5"/>
            <h5 className="mb-3"><b>Coaches encargados</b></h5>
            
            <div className="mb-5">
                {renderCoaches()}
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {renderApprentices()}
                </tbody>
                </table>
        </div>
    )
}


const mapStateToProps = (state) => ({
    trainings: state.activeTrainingReducer.activeTrainings
  });
  export default connect(mapStateToProps)(TrainingDetails);