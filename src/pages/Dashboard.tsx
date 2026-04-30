import CourseCard  from "../components/CourseCard";



const Dashboard = () => {
  return (
            <div className="course-card-section">
        <CourseCard 
          title="Episode 1"
          subtitle="AP Podcasting - Settle"
          courseCode="AP Podcasting"
          term="2025-2026"
          color="#5f0f4e"
          />
        <CourseCard 
          title="Episode 2"
          subtitle="AP Podcasting - Settle"
          courseCode="AP Podcasting"
          term="2025-2026"
          color="#04812e"
          to = "course2"
        />
        {}
      </div>
  );
};

export default Dashboard;