import { useState, useEffect } from "react";
import Profile from "../components/Profile";

// Define interfaces
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

interface User {
  username: string;
  email: string;
  watchlist?: Movie[];
  ratings?: MovieRating[];
}

// Create mock user data
const mockUser: User = {
  username: "MovieBuff2024",
  email: "moviebuff@example.com",
  watchlist: [
    { id: 1, title: "The Dark Knight" },
    { id: 2, title: "Inception" },
    { id: 3, title: "Interstellar" },
  ],
  ratings: [
    { id: 1, title: "The Dark Knight", rating: 5, review: "A masterpiece!" },
    { id: 2, title: "Inception", rating: 4, review: "Mind-bending" },
    { id: 3, title: "Interstellar", rating: 5, review: "Spectacular" },
  ],
};

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(mockUser);

  useEffect(() => {
    // Simulate API call
    const loadProfile = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUser(mockUser);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load profile");
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-profile-page">
      <Profile initialUser={user} initialIsLoggedIn={true} />
    </div>
  );
};

export default UserProfile;
