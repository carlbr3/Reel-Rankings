const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle API routes here
// app.get('/api/something' ...

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
