import CourseCard  from "../components/CourseCard";
import vinylLogo from '../assets/vinyl-logo.png';



const Dashboard = () => {
  return (
            <div className="course-card-section">
        <CourseCard 
          title="Episode 1"
          subtitle="AP Podcasting - Settle"
          courseCode="AP English Language"
          term="2025-2026"
          color="#5f0f4e"
        />
        
        {/* Add more cards as needed */}
      </div>
  );
};

export default Dashboard;