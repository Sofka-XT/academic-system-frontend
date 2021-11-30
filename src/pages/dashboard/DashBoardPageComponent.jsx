import { SideBarCoachComponent, SideBarApprenticeComponent } from './components/sideBar/SideBarComponent';
import Navbar from '../dashboard/components/navbar/Navbar'
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
import React from 'react';
import { APPRENTICE, COACH } from '../../constants/constant';


const DashBoardPageComponent = ( {user} ) => {
	return (
		<div className="dashboard" id = "dashboard">
			<Navbar />

			{user && user.role===COACH && <SideBarCoachComponent />}

			{user && user.role===APPRENTICE && <SideBarApprenticeComponent />}
			
			<div className="container_dashboard" id = "container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};

const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(DashBoardPageComponent);