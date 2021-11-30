import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import '../trainingDetailsPage/TrainingDetails.css'
import { getTrainingByIdThunk } from '../../thunkAction/trainingThunk';

function TrainingDetails({training, dispatch}) {
    const params = useParams();
    
    useEffect(() => {
        dispatch(getTrainingByIdThunk(params.trainingid));
    },[dispatch, params.trainingid])
    
    const renderCoaches = () => {
            
        return training && training.coaches.map(coach => {
                return<div className="card-coach">
                    <div className="card-coach-left" align="center">{coach.name}</div>
                    <div className="card-coach-right" align="center">{coach.emailAddress}</div>
                </div>
                
        })

    }

    const renderApprentices = () => {

        return training && training.apprentices.map(apprentice => {
            return<tr onClick={() => {console.log('click')}}>
                <td>{apprentice.name}</td>
                <td>{apprentice.emailAddress}</td>
                <td>{apprentice.phoneNumber}</td>
            </tr>
        })
    }
    return (
        <div className="p-5">
            {training && <h1>{training.name}</h1>}
            <hr className="hr mb-5"/>
            <h5 className="mb-3"><b>Coaches encargados</b></h5>
            
            <div className="mb-5 content-coach">
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
    training: state.activeTrainingReducer.training, //Este es el training que se trae con el fetch
  });
  export default connect(mapStateToProps)(TrainingDetails);