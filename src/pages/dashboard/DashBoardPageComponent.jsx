import React from 'react';
import { connect } from 'react-redux';
import { SideBarCoachComponent, SideBarStudentComponent } from './components/sideBar/SideBarComponent';
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';

export const DashBoardPageComponent = ({user}) => {

	return (
		<div className="">
			
			{
				user.tipo === "COACH" && <SideBarCoachComponent />
			}
			
			{
				user.tipo === "ESTUDIANTE" && <SideBarStudentComponent/>
			}
			
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};


const mapState = (state) => ({
	user: state.authReducer.user,
});

export default connect(mapState)(DashBoardPageComponent);
