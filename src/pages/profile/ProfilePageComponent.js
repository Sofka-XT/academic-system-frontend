import { useEffect } from "react";
import { connect } from "react-redux";
import { useAppDispatch } from "../../state/store.hook";
import { getApprenticeInfo } from "../../thunkAction/profileThunk";
import LineChartComponent from "./components/LineChartComponent";
import ApprenticeProfile from "./components/ApprenticeProfile";
import QualificationComponent from "./components/QualificacionAcordionComponent/QualificationComponent";
import "./ProfilePageComponent.css"
import { useParams } from "react-router";

const ProfilePageComponent = ({ apprentice }) => {
  const dispatch = useAppDispatch();
  const {email} = useParams();

  useEffect(() => {
    dispatch(getApprenticeInfo(email));
  }, [email, dispatch]);

  return (
    !apprentice?<h2 className="profile-error-message">No se ha encontrado un aprendiz asociado a este correo</h2>:
    <div>
        <div className="profile-component">
            <ApprenticeProfile profile={apprentice} />
        </div>
        <div className="profile-component">
            <QualificationComponent />
        </div>
        <div className="profile-component">
            <LineChartComponent />
        </div>
    </div>
  );
};

const mapState = (state) => ({ apprentice: state.profileReducer.apprentice });

export default connect(mapState)(ProfilePageComponent);
