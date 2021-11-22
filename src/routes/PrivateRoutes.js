import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
const PrivateRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

const mapState = (state) => ({
  user: state.authReducer.user,
});
export default connect(mapState)(PrivateRoutes);
