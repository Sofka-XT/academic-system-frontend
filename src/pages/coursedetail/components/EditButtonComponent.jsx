import { useNavigate } from 'react-router-dom';

export default function EditButtonComponent({ id }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/dashboard/edit/course/${id}`);
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleEdit();
      }}
    >
      Editar
    </button>
  );
}
