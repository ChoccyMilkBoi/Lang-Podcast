const Assignment1 = () => {

  const handleMarkComplete = () => {
    window.open('https://www.youtube.com/watch?v=EcoaRGeTOSA', '_blank');
    
  };

  return (
    <div className="page">
      <h1><u><b>Thursday</b></u></h1>
      <p>Welcome to the first episode of this course! Click on the link below to take you to the podcast, 
        but first, read the directions on how to absorb this dialogue without thinking too critically!</p>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Task:</h3>
        <p>Watch & Analyze Episode 1 of Dialogue for the Dehumanized</p>
        <p>With the remaining 30 minutes of class, write a literary analysys essay about how the speakers 
            in the podcast convey their message about the qualities of education and how it affects students.</p>
            <br></br>
        <p><b>Due at the end of class</b> but don't pay much mind to their arguments, since theres no need to change the banking system of education!</p>
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

export default Assignment1;