import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

interface User {
  username: string;
  email: string;
  // Add more user properties as needed
}

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // Add logout logic here later
  };

  return (
    <div className="profile-container">
      {!isLoggedIn ? (
        <div className="auth-buttons">
          <h2>Welcome to Reel-Rankings</h2>
          <p>Sign in to to create custom rankings of your favorite movies, and receive curated recommendations based on shared user preferences.</p>
          <button className="button btn-info" onClick={handleSignup}>
            Create Account
          </button>
        </div>
      ) : (
        <div className="user-profile">
          <h2>Welcome, {user?.username}!</h2>
          <div className="profile-actions">
            <button onClick={() => navigate("/watchlist")}>My Watchlist</button>
            <button onClick={() => navigate("/ratings")}>My Ratings</button>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
