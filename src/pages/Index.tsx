import React from 'react';
import LoginFormCard from '../components/Auth/LoginFormCard';

/**
 * IndexPage serves as the main login page for the application.
 * It utilizes a full-screen centered layout to display the LoginFormCard component.
 * The layout and background styling are applied directly to this page component,
 * fulfilling the role of the 'LoginLayout' template described in the project requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <LoginFormCard />
    </div>
  );
};

export default IndexPage;
