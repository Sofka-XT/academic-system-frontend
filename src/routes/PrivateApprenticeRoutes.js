import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { APPRENTICE } from '../constants/constant';

const PrivateApprenticeRoutes = ({ user, children }) => {

	try {
		if( user.role!==APPRENTICE){
			return <Navigate to="/dashboard" replace={true} />;
		}
		return children;
	} catch (error) {
		return <Navigate to="/" replace={true} />;
	}
};


const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(PrivateApprenticeRoutes);