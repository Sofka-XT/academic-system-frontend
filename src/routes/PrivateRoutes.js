import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ user, children }) => {
	try {
		if(user.role!=="COACH"){
			return <Navigate to="/dashboard/apprentice" replace={true} />;
		}
		return children;
	} catch (error) {
		return <Navigate to="/dashboard/apprentice" replace={true} />;
	}
	
};

const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(PrivateRoutes);