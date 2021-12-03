import { useNavigate } from 'react-router-dom';

export default function EditButtonComponent({ id }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/dashboard/edit/course/${id}`);
  };

  return (
    <div
    className="fas fa-edit icon-edit mt-3 mb-3 ml-3 mr-3"
      onClick={() => {
        handleEdit();
      }}
    />
  );
}
