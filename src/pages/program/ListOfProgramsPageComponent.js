import { useEffect } from "react";
import { connect } from "react-redux";
import { getProgramsThunk } from "../../thunkAction/programThunk";

const ListOfProgramsPageComponent = ({dispatch, programs }) => {

  
    useEffect(() => {
      dispatch(getProgramsThunk());
    }, [dispatch]);

    return (
      <div>
        <h1>{console.log(programs)}</h1>
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    programs: state.programReducer,
  });


  export default connect(mapStateToProps)(ListOfProgramsPageComponent);