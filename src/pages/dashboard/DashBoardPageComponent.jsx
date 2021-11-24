import { SideBarCoachComponent, SideBarApprenticeComponent } from './components/sideBar/SideBarComponent';
import Navbar from '../dashboard/components/Navbar'
import { Outlet } from 'react-router-dom';
import './DashBoardPageComponent.css';
import React, { useEffect } from 'react';
import { signInwWithLocalStorage } from '../../thunkAction/authThunk';
import { useAppDispatch } from '../../state/store.hook';

export const DashBoardPageComponent = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log("Use effect")
		dispatch(signInwWithLocalStorage());
	}, [])

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

export const DashBoardApprenticeComponent = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<SideBarApprenticeComponent />
			<div className="container_dashboard">
				<Outlet />
			</div>
		</div>
	);
};
