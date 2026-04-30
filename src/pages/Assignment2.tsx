const Assignment2 = () => {

  const handleMarkComplete = () => {
    window.open('https://youtu.be/-WkkRlDg3Ac', '_blank');
    
  };

  return (
    <div className="page">
      <h1><u><b>Wednesday</b></u></h1>
      <p>Welcome to the second episode of this course! Click on the link below to take you to the podcast, 
        but first, read the directions to make sure that you take the time to engage with the content and dialogue thoughtfully!</p>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Task:</h3>
        <p>Watch & Analyze Episode 2 of Dialogue for the Dehumanized</p>
        <p>At the end of the video get out a laptop, and connect a concept that was explored in the video and that exists in the real world or another book
           and then publish 1 reply to the main thread and reply to at least one.
           </p>
            <br></br>
        <p>Due at the end of the day (11:59), make sure to leave thoughtful content behind as the teachers will also be participating in this diuscussion board and later trial</p>
      <br></br>
      <br></br>

        <button 
        onClick={handleMarkComplete}
        className="mark-complete-btn"
        >
        Open Video
        </button>
      </div>
    </div>
  );
};

export default Assignment2;