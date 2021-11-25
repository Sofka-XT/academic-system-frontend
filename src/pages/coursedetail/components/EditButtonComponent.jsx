

export default function EditButtonComponent (id){


    const handleEdit=()=>{
        console.log(id)
    }

    return (
        <button className="button" onClick={()=>{handleEdit()}}>
            Editar
        </button>
    )
}