import { connect } from "react-redux";
import AccordionCourse from "./AccordionCourse";
import "./QualificacionComponent.css"

const QualificationComponent = ({ dispatch, apprentice, loading, hasError }) => {

  return (
    <div>
      <h1 className='TitleQualification'>Estados de calificaciones</h1>
      {console.log(apprentice?.courses)}
      <div>
      <AccordionCourse courses={apprentice?.courseScores} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  apprentice: state.profileReducer.apprentice
});
export default connect(mapStateToProps)(QualificationComponent);
