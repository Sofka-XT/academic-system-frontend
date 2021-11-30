import { useEffect } from "react";
import { connect } from "react-redux";
import { useAppDispatch } from "../../state/store.hook";
import { getApprenticeInfo } from "../../thunkAction/profileThunk";

const  ProfilePageComponent = ({apprentice}) =>
{
    const dispatch = useAppDispatch();

    useEffect(()=>
    {
        dispatch(getApprenticeInfo());
    }, [dispatch]);

    console.log(apprentice);
    return <div></div>;
}

const mapState = (state) => 
({apprentice: state.profileReducer.apprentice})

export default connect(mapState)(ProfilePageComponent);