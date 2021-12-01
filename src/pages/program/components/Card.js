import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import React from "react";
export const Card = ({ id, name, dispatch, handleEdit }) => {
  return (
    <>
      <div className="training__program-main-container">
        <div className="training__item">
          <picture>
            <source
              type="image/jpg"
              srcset={process.env.PUBLIC_URL + "assets/img/program-card-bg.jpg"}
            />
            <img className="training__img" alt={name} />
          </picture>
          <div className="training__description container">
            <h2 className="training__description--title">
              {name}
              <hr />
            </h2>
            <h5 className="training__description--subtitle"></h5>
          </div>
          
        </div>

        <div className="content-program">
          <div className="card-title">
            <h4 className="training__card-name m-3">{name} </h4>
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
