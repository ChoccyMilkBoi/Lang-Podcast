const Assignment1 = () => {

  const handleMarkComplete = () => {
    window.open('https://lamarconsolidated-my.sharepoint.com/personal/ae206496_students_lcisd_org/_layouts/15/stream.aspx?id=%2Fpersonal%2Fae206496_students_lcisd_org%2FDocuments%2FAttachments%2FEpisode%201-The%20Cave.mp4&ct=1776307700001&or=OWA-NT-Mail&cid=bcd4b55d-a6c6-6e5f-3443-86864f5577c5&ga=1&referrerScenario=AddressBarCopied.view.0a89f20d-4a55-46a1-960f-f475fe10135b&isDarkMode=true', '_blank');
    
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