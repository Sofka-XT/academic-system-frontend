import { SideBarCoachComponent, SideBarStudentComponent } from './components/sideBar/SideBarComponent';
import Navbar from '../dashboard/components/Navbar'
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
import React from 'react';

export const DashBoardPageComponent = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<SideBarCoachComponent />
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};

export const DashBoardStudentComponent = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<SideBarStudentComponent />
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};
