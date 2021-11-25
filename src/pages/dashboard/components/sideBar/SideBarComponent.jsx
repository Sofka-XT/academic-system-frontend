import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { apprenticeLinks, coachLinks } from '../NavigateLinks/NavigateLinks';
import './SideBarComponent.css';

export const SideBarCoachComponent = () => {
  return (
    <aside className="sideBar" id="sideBar">
      <nav
        className="sideBar_menu flex_column_center"
        id="sideBar_menu flex_column_center"
      >
        <ul className="links">
          {coachLinks &&
            coachLinks.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  className="link"
                  activeclassname="active"
                  end
                  to={data.path}
                >
                  {' '}
                  {data.name.toUpperCase()}{' '}
                </NavLink>
              );
            })}
        </ul>
      </nav>
    </aside>
  );
};

export const SideBarApprenticeComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul>
          <Link to="casa">Dashboard</Link>
        </ul>
        <ul>
          <Link to="create/course">Crear Curso</Link>
        </ul>
        <ul>
          <Link to="courseslist">Courses List</Link>
        </ul>
      </nav>
    </aside>
  );
};
