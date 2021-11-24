import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateStudentRoutes = ({ user, children }) => {

	try {
		if( user.role!=="STUDENT"){
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
export default connect(mapState)(PrivateStudentRoutes);
