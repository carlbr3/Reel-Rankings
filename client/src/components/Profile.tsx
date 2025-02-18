import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

interface User {
  username: string;
  email: string;
  watchlist?: Movie[];
  ratings?: MovieRating[];
}

interface Movie {
  id: number;
  title: string;
}

interface MovieRating {
  id: number;
  title: string;
  rating: number;
  review?: string;
}

interface ProfileProps {
  initialUser?: User | null;
  initialIsLoggedIn?: boolean;
}

// Declare mockUser as a constant
const mockUser: User = {
  username: "MovieBuff2024",
  email: "moviebuff@example.com",
  watchlist: [
    { id: 1, title: "The Dark Knight" },
    { id: 2, title: "Inception" },
  ],
  ratings: [
    { id: 1, title: "The Dark Knight", rating: 5 },
    { id: 2, title: "Inception", rating: 4 },
  ],
};

const Profile: React.FC<ProfileProps> = () => {
  // Explicitly use mockUser in state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(mockUser);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(mockUser); // Use mockUser here instead of null
  };

  return (
    <div className="profile-container">
      {!isLoggedIn ? (
        <div className="auth-buttons">
          <h2>Welcome to Reel-Rankings</h2>
          <p>
            Sign in to create custom rankings of your favorite movies, and
            receive curated recommendations based on shared user preferences.
          </p>
          <button className="button btn-info" onClick={handleSignup}>
            Create Account
          </button>
        </div>
      ) : (
        <div className="user-profile">
          <h2>Welcome, {user?.username}!</h2>
          <div className="profile-actions">
            <button onClick={() => navigate("/watchlist")}>
              My Watchlist ({user?.watchlist?.length || 0})
            </button>
            <button onClick={() => navigate("/ratings")}>
              My Ratings ({user?.ratings?.length || 0})
            </button>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
