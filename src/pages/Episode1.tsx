import { useNavigate } from 'react-router-dom';

const Course1 = () => {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      <h1>Episode 1 - The Cave</h1>
      <p>Welcome to the Dialogue for the Dehumanized Podcast!</p>
      <p>Meet your teachers in the short articles below, and go to each assignment using the links below!</p>

      <br></br>

      <a
        href="https://www.instagram.com/dftd_humanity/"
        target="_blank"
        rel="noopener noreferrer"
        className="start-assignment-btn"
      >
        Visit our Instagram →
      </a>

      <br></br>
      <br></br>


      <p>What role does education play in revolution?</p>

      <br></br>

      <p>
        In this podcast we explore the ideas of oppression and education as portrayed by Paulo Freire, and how by guiding the masses, education can be used as a tool by which to bind 
        the masses to their ignorance and to free them from their own limited perspectives. By educating the masses in a way that does not build a dialogue,
        an empty sort of knowledge may be planted into the masses. Similarly to the casting of shadows in the allegory of the cave, oppressors use empty knowledge
        to convince the oppressed of their own knowledge and prevent greater social change. Furthermore, an inability to create an effective dialogue is what acts as
        chains upon the oppressed too.
      </p>
      <br></br>
      <br></br>

      <h2>Andreia Da Silva Ekburg</h2>
      <p>Producer, editor, cameraperson, and outline writer for the videos in this course!</p>
      <br></br>
      <h2>Keira Martin & Eli Newlin</h2>
      <p>Podcast hosts and input on ideas in the podcast, conveying the information in this course!</p>
      <br></br>
      <h2>Emilio Armijo</h2>
      <p>Designer of this webpage and input on ideas in podcast!</p>
      <br></br>
      <h2>Amy Torres</h2>
      <p>Social Media, putting up posts for the podcast's instagram and producing art for the webpage and input on ideas in the podcast!</p>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='button-holder'>
      <button  className="start-assignment-btn"
        onClick={() => navigate('/assignment1')}
        >
        Start Assignment 1 →
      </button>
      <button  className="start-assignment-btn"
        onClick={() => navigate('/course2')}
        >
        Go To Assignment #2 →
      </button>

      </div>
    </div>
  );
};

export default Course1;