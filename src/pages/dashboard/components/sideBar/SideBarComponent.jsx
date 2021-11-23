import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';

export const SideBarCoachComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul>
			
          <Link to="logout">Log Out Page</Link> <br/> <br/>

          <Link to="trainingstory">Training Story</Link> <br/> <br/>

          <Link to="activeprograms">Active Programs</Link> <br/> <br/>

          <Link to="program">Create Program</Link> <br/> <br/>

        </ul>
      </nav>
    </aside>
  );
};


export const SideBarStudentComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul>
			
          <Link to="logout">Log Out Page</Link> <br/> <br/>

        </ul>
      </nav>
    </aside>
  );
};