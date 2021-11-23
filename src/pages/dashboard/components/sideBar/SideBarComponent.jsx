import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';

export const SideBarComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul>
          <Link to="casa">Dashboard</Link>
        </ul>
        <ul>
          <Link to="programs">Programs</Link>
        </ul>
      </nav>
    </aside>
  );
};
