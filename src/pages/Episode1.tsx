import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Course1 = () => {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      <h1>Episode 1 - The Cave</h1>
      <p>Welcome to the Dialogue for the Dehumanized Podcast!</p>
      <p>Meet your teachers in the short articles below, and go to each assignment using the links below!</p>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h2>Andreia Da Silva Ekburg</h2>
      <br></br>
      <h2>Eli Newlin</h2>
      <br></br>
      <h2>Keira Martin</h2>
      <br></br>
      <h2>Emilio Armijo</h2>
      <br></br>
      <h2>Amy Torres</h2>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <button  className="start-assignment-btn"
        onClick={() => navigate('/assignment1')}
        >
        Start Assignment 1 →
      </button>
    </div>
  );
};

export default Course1;