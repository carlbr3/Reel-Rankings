-- DROP DATABASE
DROP DATABASE IF EXISTS reelrankings-db;

-- CREATE DATABASE
CREATE DATABASE reelrankings-db;

-- Connect to the database
\c reelrank;

-- Create Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Movies Table
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INT,
    genre VARCHAR(100),
    tmdb_id INT UNIQUE, -- To link with TMDb API
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Rankings Table
CREATE TABLE rankings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
    ranking_position INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data (optional)
INSERT INTO users (username, email, password_hash) 
VALUES ('testuser', 'test@example.com', 'hashedpassword123');
