import React from 'react'
import { NavLink } from 'react-router-dom';
import '../SideBarComponent.css'

export default function SideBarListComponent(props) {
    return (
        <>
            {props.listLinks && props.listLinks.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  className="link"
                  activeclassname="active"
                  end
                  to={data.path}
                >
                  {" "}
                  {data.name.toUpperCase()}{" "}
                </NavLink>
              );
            })}
        </>
    )
}
