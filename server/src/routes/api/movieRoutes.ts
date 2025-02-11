import express from "express";
const { Movie } = require("../models");

const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// Add a new movie
router.post("/", async (req, res) => {
  try {
    const { title, release_year, genre, tmdb_id } = req.body;
    const newMovie = await Movie.create({ title, release_year, genre, tmdb_id });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Error adding movie" });
  }
});

module.exports = router;
