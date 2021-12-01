import React from "react";
import { apprenticeLinks, coachLinks } from "../../../../nav/NavigateLinks";
import SideBarListComponent from "./components/SideBarListComponent";
import "./SideBarComponent.css";

export const SideBarCoachComponent = () => {
  return (
    <aside className="sideBar" id="sideBar">
      <nav className="sideBar_menu flex_column_center" id="sideBar_menu flex_column_center">
        <ul className="links">
          <SideBarListComponent listLinks = {coachLinks}></SideBarListComponent>
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
          <SideBarListComponent listLinks = {apprenticeLinks}></SideBarListComponent>
        </ul>
      </nav>
    </aside>
  );
};
