const Topbar = () => {
    return (
        <div className="topBar">
            <h2>SUTD Gym Tracker</h2>
            <div className="descContainer">
                <p>A tracker that provides analytics on the number of people in the gym in SUTD. Developed by SUTD students with ReactJS (Frontend), Google Firebase (Backend), and ESP32 (Hardware).</p>
                <a href="https://github.com/matteolee72/sutd_gym_tracker" target="_blank" rel="noopener">Github Repo</a>
            </div>
        </div>
    );
}

export default Topbar;