import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import React from "react";
export const Card = ({ id, name, dispatch, handleEdit }) => {
  return (
    <>
      <div className="bd-callout bd-callout-warning">
        <div className="general__item">
          <div className="general__description container">
            <h2 className="general__description--title">
              {name}
              <hr />
            </h2>

          </div>
          
        </div>

        <div className="content-program">
          <div className="card-title">
            <h4 className="general__card-name m-3">{name} </h4>
            <div className="buttons-card-container">
              <Link to="editProgram">
                <i
                  className="fas fa-edit icon-edit"
                  onClick={() => handleEdit(id)}
                ></i>
              </Link>
              <DeleteButton idData={id} dispatch={dispatch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
