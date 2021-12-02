import { useEffect } from "react";
import { connect } from "react-redux";
import { useAppDispatch } from "../../state/store.hook";
import { getApprenticeInfo } from "../../thunkAction/profileThunk";
import LineChartComponent from "./components/LineChartComponent";
import ApprenticeProfile from "./components/ApprenticeProfile";
import QualificationComponent from "./components/QualificacionAcordionComponent/QualificationComponent";
import "./ProfilePageComponent.css"

const ProfilePageComponent = ({ apprentice }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getApprenticeInfo());
  }, [dispatch]);

  console.log(apprentice);
  return (
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
