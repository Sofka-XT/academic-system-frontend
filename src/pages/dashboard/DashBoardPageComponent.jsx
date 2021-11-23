import React from 'react';
import { SideBarComponent } from './components/sideBar/SideBarComponent';
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
import Navbar from './components/Navbar';
export const DashBoardPageComponent = () => {
	return (
		<div className="">
			<Navbar></Navbar>
			<div className = "dashboard">
				<SideBarComponent/>
				<div className="container_dashboard">
					<Outlet/>
				</div>	
			</div>
			
		</div>
	);
};
