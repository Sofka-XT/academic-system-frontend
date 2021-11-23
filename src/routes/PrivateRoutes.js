import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ user, children }) => {

	switch (user) {
		case !user:
			return <Navigate to="/" replace={true} />;
		case user.tipo==="COACH":
			return <h1>I'm a coach</h1>;

		case user.tipo==="ESTUDIANTE":
			return <h1>I'm a coach</h1>;
			
		default:
			return children;
	}
	
};







const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(PrivateRoutes);
