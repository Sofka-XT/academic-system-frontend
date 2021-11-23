import React from 'react';
import { SideBarComponent } from './components/sideBar/SideBarComponent';
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
export const DashBoardPageComponent = () => {
	return (
		<div className="">
			<SideBarComponent />
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};
