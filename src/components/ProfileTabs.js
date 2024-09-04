import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import './ProfileTabs.css'; // Import the CSS file

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <Tab.Container defaultActiveKey="about">
      <Nav variant="tabs" className="custom-nav-tabs">
        <Nav.Item>
          <Nav.Link
            eventKey="about"
            className={`custom-tab-link ${
              activeTab === 'about' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="experiences"
            className={`custom-tab-link ${
              activeTab === 'experiences' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('experiences')}
          >
            Experiences
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="recommended"
            className={`custom-tab-link ${
              activeTab === 'recommended' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommended
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content className="custom-tab-content">
        <Tab.Pane eventKey="about">
          <p>Hello!  I’m Dave, your sales rep here from Salesforce. this is about  I’ve been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany an
            d my 4-year-old twin daughters Emma and Ella. Both of them are just starting school, so my 
            calendar is usually blocked between 9-10 AM. This is a...</p>
        </Tab.Pane>
        <Tab.Pane eventKey="experiences">
        <p>Hello! this is experiences. I’ve been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany an
            d my 4-year-old twin daughters Emma and Ella. Both of them are just starting school, so my 
            calendar is usually blocked between 9-10 AM. This is a...</p>
        </Tab.Pane>
        <Tab.Pane eventKey="recommended">
        <p>Hello! this recommended .your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany an
            d my 4-year-old twin daughters Emma and Ella. Both of them are just starting school, so my 
            calendar is usually blocked between 9-10 AM. This is a...</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default ProfileTabs;
