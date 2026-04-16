import LeftNav from './components/LeftNav';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import Course1 from './pages/Episode1';
import Assignment1 from './pages/Assignment1';

const UpdTitle = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/course1':
        return 'The Cave';
      case '/assignment1':
        return 'Assignment 1';
      default:
        return 'Dashboard';
    }
  };
  return <h1 className="dash-text">{getTitle()}</h1>;
};


function App() {
  return (
    <div className="mastergrid">
      <LeftNav />

      <div className="main">
        <div className="dash-title">
          <UpdTitle/>
        </div>

        <div className="course-card-section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/course1" element={<Course1 />} />
            <Route path="/assignment1" element={<Assignment1 />} />
          </Routes>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="rightbar">
        <div className="rightbar-section top-rightbar-section">
          <h3>To Do</h3>
          <div className="task-item">
            <span>👀 Watch episode 1 of our podcast now!</span>
          </div>
        </div>

        <div className="rightbar-section">
          <h3>Coming Up</h3>
          <div className="task-item">
            <span>📅 Episode 2 in production!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;