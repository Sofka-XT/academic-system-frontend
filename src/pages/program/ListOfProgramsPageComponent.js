import { useEffect } from "react";
import { connect } from "react-redux";
import { Card } from "../../common/card/Card";
import { getProgramsThunk } from "../../thunkAction/programThunk";

const ListOfProgramsPageComponent = ({dispatch, programs }) => {

    const handleClick = (id) => {

      console.log("card...." + id)
    }
  
    useEffect(() => {
      dispatch(getProgramsThunk());
    }, [dispatch]);

    return (
      <div>
        {
          programs && (
            programs.map((program) => {
              return(
                <div key={program.id} onClick={() => handleClick(program.id)}>
                  <Card name = {program.name}/>
                </div>
              )
            })
          )
        }
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    programs: state.programReducer.programs
  });


  export default connect(mapStateToProps)(ListOfProgramsPageComponent);