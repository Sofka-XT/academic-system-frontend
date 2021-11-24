import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarComponent.css';

export const SideBarCoachComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul className="links">
          <NavLink className="link" activeClassName="active" end to="logout">LOG OUT</NavLink>
          <NavLink className="link" activeClassName="active" end to="trainingstory">TRAINING HISTORY</NavLink>
          <NavLink className="link" activeClassName="active" end to="programstory">PROGRMA HISTORY</NavLink>
          <NavLink className="link" activeClassName="active" end to="activeprogram">ACTIVE PROGRAMS</NavLink>
          <NavLink className="link" activeClassName="active" end to="activetraining">ACTIVE TRAINING</NavLink>
          <NavLink className="link" activeClassName="active" end to="program">CREATE PROGRAM</NavLink>
          <NavLink className="link" activeClassName="active" end to="training">CREATE TRAINING</NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export const SideBarApprenticeComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul className="links">
          <NavLink to="logout">Log Out Page</NavLink>
          <NavLink className="link" activeClassName="active" end to="activetraining">ACTIVE TRAINING</NavLink>
        </ul>
      </nav>
    </aside>
  );
};