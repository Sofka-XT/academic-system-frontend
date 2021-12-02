
import { useNavigate } from 'react-router';

export const CourseComponent = ({ name, id }) => {
  const navigate = useNavigate();

  return (
  /*   <button
      className = "training-card"
      onClick={() => {
        navigate(`coursedetail/${id}`);
      }}
    >
    
      {name}
    </button> */
    <>
      <div className="training__program-main-container pointer"
      onClick={() =>navigate(`coursedetail/${id}`)}>
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

          </div>
          
        </div>

        <div className="content-program">
          <div className="card-title">
            <h4  
            className="training__card-name m-3 ">{name} </h4>
            <div className="buttons-card-container">
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
