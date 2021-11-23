import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ user, children }) => {

	console.log("EL USUARIO EN PRIVATE ROUTES: ", user)
	if(!user){
		return <Navigate to="/" replace={true} />;
	}

	return children;
	
};


const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(PrivateRoutes);
