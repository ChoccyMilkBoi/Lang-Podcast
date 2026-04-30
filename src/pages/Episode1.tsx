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
      <p>
        The book Pedagogy of the Oppressed explores the ideas of how education works, thus the use of the unfamiliar word Pedagogy in the title, which is the study or craft of education. 
        But more specifically, the book considers how differing methods in education create differences in the outcomes of students critical thinking skills.
      </p>
      <br></br>
      <p>In this episode, we discuss the type of education system that most closely reflects that of the cave - the banking system of education as described by Freire. The banking system 
        of education is reliant on simple memorization without room for greater dialogue, stifling critical thinking. This system of education also unnecessarily creates a hierarchy amongst 
        students and educators, leading to students being conditioned to existing in a hierarchical system that does not do nearly enough to lend them power over their actions and thoughts.
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
        Start Assignment →
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