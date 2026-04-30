const Assignment2 = () => {

  const handleMarkComplete = () => {
    window.open('https://youtu.be/-WkkRlDg3Ac', '_blank');
    
  };

  return (
    <div className="page">
      <h1><u><b>Wednesday</b></u></h1>
      <p>Welcome to the first episode of this course! Click on the link below to take you to the podcast, 
        but first, read the directions on how to absorb this dialogue without thinking too critically!</p>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Task:</h3>
        <p>Watch & Analyze Episode 2 of Dialogue for the Dehumanized</p>
        <p>At the end of the video get out a laptop, and connect a concept that was explored in the video and that exist in the real work and then publish 1 reply to the main thread and reply to\
             at lease one </p>
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