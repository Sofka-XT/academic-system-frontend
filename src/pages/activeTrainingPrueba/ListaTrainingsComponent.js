import { useEffect } from "react";
import { connect } from "react-redux";
import { getActiveTrainingThunk } from "../../thunkAction/activeTrainingThunk";

const ListaTrainingsComponent = ({dispatch, activeTrainings ,loading,hasErrors}) => {

  
    useEffect(() => {
      dispatch(getActiveTrainingThunk());
    }, [dispatch]);

    const renderActiveTraining = () => {
      if (loading) return <p>Loading trainings...</p>
      if (hasErrors) return <p>Unable to display trainings.</p>
     // console.log("activeTrainings")
      //console.log(activeTrainings)
      return activeTrainings.map(training => <h5>{training.name}</h5>)
      //activeTrainings.map(training => console.log(training.name))
     //return <h1>lololo</h1>
  }
    return (
      
      <div>
      <h1>Trainings</h1>
      <h1>{console.log(activeTrainings.activeTrainings)}</h1>
      {renderActiveTraining()}
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    activeTrainings: state.activeTrainingReducer.activeTrainings,
    loading: state.activeTrainingReducer.loading,
    hasErrors: state.activeTrainingReducer.hasErrors,
    redirect: state.activeTrainingReducer.redirect,

  });


  export default connect(mapStateToProps)(ListaTrainingsComponent);