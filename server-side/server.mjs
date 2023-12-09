// Import necessary modules
import express from "express";
import cors from "cors";
import axios from "axios";

// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());

// Define the /sparql route
app.post("/sparql", async (req, res) => {
  const { query, endpoint } = req.body;

  // Use the provided endpoint or a default one
  const sparqlEndpoint = endpoint || "https://makg.org/sparql";

  try {
    // Make an HTTP GET request using axios with async/await
    const response = await axios.get(sparqlEndpoint, {
      params: {
        query: query,
      },
      headers: {
        Accept: "application/json",
      },
    });

    // Send the response with the appropriate Content-Type
    res.header("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
