import { useEffect } from "react";
import { connect } from "react-redux";
import { useAppDispatch } from "../../state/store.hook";
import { getApprenticeInfo } from "../../thunkAction/profileThunk";
<<<<<<< HEAD
import ApprenticeProfile from "./components/ApprenticeProfile";
=======
import LineChartComponent from "./components/LineChartComponent";
>>>>>>> f66e2f0c5a3154ed3046546c9df95e273be6cfaf

const ProfilePageComponent = ({ apprentice }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getApprenticeInfo());
  }, [dispatch]);

<<<<<<< HEAD
  console.log(apprentice);
  return (
    <>
      {apprentice && (
        <div>
          <h1>Profiles</h1>
          <ApprenticeProfile profile={apprentice}></ApprenticeProfile>
        </div>
      )}
      ;
    </>
  );
};
=======
    console.log(apprentice);
    return <div><LineChartComponent /></div>;
}
>>>>>>> f66e2f0c5a3154ed3046546c9df95e273be6cfaf

const mapState = (state) => ({ apprentice: state.profileReducer.apprentice });

export default connect(mapState)(ProfilePageComponent);
