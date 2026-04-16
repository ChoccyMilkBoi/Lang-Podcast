import { Link, useLocation } from 'react-router-dom';

const LeftNav = () => {
  const location = useLocation();

  return (
<div className="sidebar">

      <nav>
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          title="Dashboard"
        >
          🏠
        </Link>

        <Link 
          to="/course1" 
          className={`nav-item ${location.pathname === '/course1' ? 'active' : ''}`}
          title="Course 1"
        >
          📚
        </Link>

        <Link 
          to="/assignment1" 
          className={`nav-item ${location.pathname === '/assignment1' ? 'active' : ''}`}
          title="Assignment 1"
        >
          📝
        </Link>

        <Link to="#" className="nav-item" title="Calendar">📅</Link>
        <Link to="#" className="nav-item" title="Inbox">✉️</Link>
        <Link to="#" className="nav-item" title="History">⏰</Link>
        <Link to="#" className="nav-item" title="Search">🔍</Link>
      </nav>
    </div>
  );
};

export default LeftNav;