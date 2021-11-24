import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarComponent.css';

export const SideBarCoachComponent = () => {
  return (
    <aside className="sideBar">
      <nav className="sideBar_menu flex_column_center">
        <ul className="links">
          <NavLink className="link" activeClassName="active" end to="home">INICIO</NavLink>
          <NavLink className="link" activeClassName="active" end to="trainingstory">HISTÓRICO DE TRAINING</NavLink>
          <NavLink className="link" activeClassName="active" end to="programstory">HISTÓRICO DE PROGRAMAS</NavLink>
          <NavLink className="link" activeClassName="active" end to="activeprogram">PROGRAMAS ACTIVOS</NavLink>
          <NavLink className="link" activeClassName="active" end to="activetraining">TRAINING ACTIVOS</NavLink>
          <NavLink className="link" activeClassName="active" end to="program">CREAR PROGRAMAS</NavLink>
          <NavLink className="link" activeClassName="active" end to="training">CREAR TRAINING</NavLink>
          <NavLink className="link" activeClassName="active" end to="logout">CERRAR SESIÓN</NavLink>
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
          <NavLink className="link" activeClassName="active" end to="logout">CERRAR SESIÓN</NavLink>
          <NavLink className="link" activeClassName="active" end to="activetraining">TRAINING ACTIVOS</NavLink>
        </ul>
      </nav>
    </aside>
  );
};