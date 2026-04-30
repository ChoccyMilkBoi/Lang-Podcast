import { useNavigate } from "react-router-dom";

const Course2 = () => {
    const navigate = useNavigate();

    return(
        <>
            <div className="coursePage">
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
        </>
    )
}

export default Course2;