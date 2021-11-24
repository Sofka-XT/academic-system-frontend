
import { useNavigate } from "react-router";
import { connect } from "react-redux";

const EditButtonComponent = (id) =>{

    const navigate = useNavigate();

    const handleEdit=()=>{
        console.log(id)
    }

    return (
        <button onClick={()=>{handleEdit()}}>
            Editar
        </button>
    )
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps)(EditButtonComponent)