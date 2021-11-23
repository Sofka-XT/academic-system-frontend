import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';

export const SideBarComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul className = "links">
			
          <Link to="logout" className = "link">Log Out Page</Link> <br/> <br/>

          <Link to="trainingstory" className = "link">Training Story</Link> <br/> <br/>

          <Link to="activeprograms" className = "link">Active Programs</Link> <br/> <br/>

          <Link to="program" className = "link">Create Program</Link> <br/> <br/>

        </ul>
      </nav>
    </aside>
  );
};
