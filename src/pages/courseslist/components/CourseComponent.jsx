import './CourseComponent.css';
import { useNavigate } from 'react-router';

export const CourseComponent = ({ name, id }) => {
  const navigate = useNavigate();

  return (
    <button
      className="course"
      onClick={() => {
        navigate(`coursedetail/${id}`);
      }}
    >
      {name}
    </button>
  );
};
