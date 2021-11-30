import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import React from 'react'
export const Card = ({id,name,dispatch,handleEdit}) => {

    return (
        <div className="card col-4">
            <div className="card-header">
                <img alt={name} src='https://blog.comparasoftware.com/wp-content/uploads/2020/08/program_manager.png' width='100' />
            </div>
            <div className="card-body">
                <h4 className="card-title-programs">{name}</h4>  
            <div>
              <Link to="editProgram"> <button className="button-edit" onClick={() => handleEdit(id)}>Edit</button></Link>
              <DeleteButton idData={id} dispatch={dispatch}/>
            </div>
            </div>
        </div>
    );
  };
