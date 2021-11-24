import React from 'react';
import { SideBarCoachComponent, SideBarStudentComponent } from './components/sideBar/SideBarComponent';
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';

export const DashBoardPageComponent = ( ) => {
	return (
		<div className="">
			
			<SideBarCoachComponent />
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};


export const DashBoardStudentComponent = () => {
	return (
		<div className="">
			
			<SideBarStudentComponent/>
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};
