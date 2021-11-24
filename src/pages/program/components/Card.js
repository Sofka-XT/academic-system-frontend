import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";

export const Card = ({id,name,dispatch}) => {

    return (
        <div className="card">
            <div className="card-header">
                <img src='https://blog.comparasoftware.com/wp-content/uploads/2020/08/program_manager.png' width='100' />
            </div>
            <div className="card-body">
                <h4>{name}</h4>  
            <div>
                <Link to={`/dashboard/editProgram/`}><button className="button-edit">Edit</button></Link>
                <DeleteButton idData={id} dispatch={dispatch}/>
            </div>
            </div>
        </div>
    );
  };