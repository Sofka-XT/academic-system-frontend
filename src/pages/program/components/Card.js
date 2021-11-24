import { Link } from "react-router-dom"

export const Card = ({id,name,handleDelete,handleEdit}) => {

    return (
        <div>
            <div>
                <img src='https://blog.comparasoftware.com/wp-content/uploads/2020/08/program_manager.png' width='100' alt="program_manager" />
            </div>
            <div>
              <h1>{name}</h1>  
              <button onClick={() => handleDelete(id)}>Delete</button>
              <Link to="editProgram"> <button onClick={() => handleEdit(id)}>Edit</button></Link>
            </div>
        </div>
    );
  };