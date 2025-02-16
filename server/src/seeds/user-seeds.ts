import { User } from "../models";

const userData = [
  {
    username: "MovieBuff2024",
    email: "moviebuff@example.com",
    password: "password123",
  },
  {
    username: "FilmFanatic",
    email: "filmfan@example.com",
    password: "password456",
  },
];

export const seedUsers = async () => {
  try {
    await User.create(userData[0]);
    await User.create(userData[1]);
    console.log("Users seeded successfully");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
};
