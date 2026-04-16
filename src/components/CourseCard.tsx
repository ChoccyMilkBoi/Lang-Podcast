import { Link } from 'react-router-dom';
import vinylLogo from '../assets/vinyl-logo.png';

interface CourseCardProps {
  title: string;
  subtitle: string;
  courseCode: string;
  term: string;
  color?: string;
  to?: string;
}

const CourseCard = ({
  title = "",
  subtitle = "",
  courseCode = "",
  term = "",
  color = "#5f0f4e",
  to = "/course1"
}: CourseCardProps) => {
  return (
    <Link to={to} className="course-card">
      <div className="course-header" style={{ backgroundColor: color }}>
        <img
          src={vinylLogo}
          alt="Podcast"
          className="card-vinyl"
        />
        <div className="course-info">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="menu-dots">⋮</div>
      </div>

      {/* White Bottom Section */}
      <div className="course-body">
        <p className="course-code">{courseCode}</p>
        <p className="term">{term}</p>
        <p className="speaker-icon">🔊</p>
      </div>
    </Link>
  );
};

export default CourseCard;