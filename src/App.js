import React from 'react';
import ProfileTabs from './components/ProfileTabs';
import Gallery from './components/Gallery';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container flex flex-col lg:flex-row min-h-screen">
      {/* Left half - empty for large screens, hidden on smaller screens */}
      <div className="left-section lg:w-1/2 hidden lg:block"></div>
      
      {/* Right side widgets */}
      <div className="right-section w-full lg:w-1/2 p-4 lg:p-8">
        <ProfileTabs />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
