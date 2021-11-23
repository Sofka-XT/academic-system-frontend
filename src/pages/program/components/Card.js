export const Card = ({id,name,handleDelete}) => {

    return (
        <div>
            <div>
                <img src='https://blog.comparasoftware.com/wp-content/uploads/2020/08/program_manager.png' width='100' />
            </div>
            <div>
              <h1>{name}</h1>  
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
  };