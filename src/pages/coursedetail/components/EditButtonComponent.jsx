

export default function EditButtonComponent (id){


    const handleEdit=()=>{
        console.log(id)
    }

    return (
        <button onClick={()=>{handleEdit()}}>
            Editar
        </button>
    )
}