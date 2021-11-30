import React, {useEffect, useLayoutEffect} from 'react'
import { connect } from "react-redux";
import ListTraining from './components/ListTraining'
import { getActiveTrainingThunk } from "../../thunkAction/activeTrainingThunk";
import './TrainingListPageComponent.css'
import { saveLastPathWhenReload } from '../../common/saveLastPath/saveLastPath';


const TrainingListPageComponent = ({dispatch, activeTrainings ,loading,hasErrors}) => {

  saveLastPathWhenReload()

    useEffect(() => {
        dispatch(getActiveTrainingThunk());
      }, [dispatch]);
      console.log(activeTrainings)
    return (
        <div className = "trainings">
            <h1>Training Activos</h1>
            <ListTraining trainings = {activeTrainings}/>
        </div>
    )
}

const mapStateToProps = state => ({
    activeTrainings: state.activeTrainingReducer.activeTrainings,
    loading: state.activeTrainingReducer.loading,
    hasErrors: state.activeTrainingReducer.hasErrors,
    redirect: state.activeTrainingReducer.redirect,

  });

export default connect(mapStateToProps)(TrainingListPageComponent);

