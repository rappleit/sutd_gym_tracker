import './App.css';
import Counter from './components/counter';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import Stats from './components/stats';
import Sidebar from './components/Sidebar';
import ActivityLog from './components/ActivityLog';
import Topbar from './Topbar';

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <div className="content">
        <section>
          <Counter {...{db}}/>
          <ActivityLog {...{db}}/>
        </section>
        
        
      </div>
    </div>
  );
}

export default App;
