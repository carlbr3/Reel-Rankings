const express = require("express");
const { Ranking, Movie, User } = require("../models");

const router = express.Router();

// Get all rankings
import { Request, Response } from "express";

router.get("/", async (req: Request, res: Response) => {
  try {
    const rankings = await Ranking.findAll({ include: [User, Movie] });
    res.json(rankings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch rankings" });
  }
});

// Rank a movie
router.post("/", async (req: Request, res: Response) => {
  try {
    const { user_id, movie_id, ranking_position } = req.body;
    const newRanking = await Ranking.create({ user_id, movie_id, ranking_position });
    res.status(201).json(newRanking);
  } catch (error) {
    res.status(500).json({ error: "Error ranking movie" });
  }
});

module.exports = router;
