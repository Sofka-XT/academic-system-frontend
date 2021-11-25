import { SideBarCoachComponent, SideBarApprenticeComponent } from './components/sideBar/SideBarComponent';
import Navbar from '../dashboard/components/Navbar'
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
import React from 'react';


export const DashBoardPageComponent = () => {


	return (
		<div className="dashboard" id = "dashboard">
			<Navbar />
			<SideBarCoachComponent />
			<div className="container_dashboard" id = "container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};

export const DashBoardApprenticeComponent = () => {
	return (
		<div className="dashboard" id = "dashboard">
			<Navbar />
			<SideBarApprenticeComponent />
			<div className="container_dashboard" id ="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};
