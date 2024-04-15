const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3300;

console.log("Server Running");

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable All CORS Requests
app.use(cors());

let votes = []; // An array to store votes

app.post('/api/votes', (req, res) => {
    console.log("Route handler working")
    const { pollId, optionId } = req.body; // Extract vote data from the request body
    console.log("Vote data extracted")
  
    // Ensure we have the necessary data
    if (pollId && optionId) {
       // console.log("If Statement Called") // Test
        votes.push({ pollId, optionId }); // Store the vote
       // console.log("vote success") // Test
        res.status(201).json({ message: "Vote successfully recorded" });
    } else {
        // If some data is missing, send a bad request response
        res.status(400).json({ message: "Missing pollId or optionId in the request" });
    }
    });
    
 app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   });


app.get('/api/votes/results', (req, res) => {
    
// Calculate vote totals by optionId
const voteCounts = votes.reduce((acc, vote) => {
  acc[vote.optionId] = (acc[vote.optionId] || 0) + 1;
  return acc;
}, {});

// Sum total votes
const totalVotes = Object.values(voteCounts).reduce((acc, count) => acc + count, 0);

// Calculate percentages
const votePercentages = Object.keys(voteCounts).map(optionId => ({
  optionId,
  percentage: ((voteCounts[optionId] / totalVotes) * 100).toFixed(0) // 0 decimal places
}));
console.log(votePercentages)
    const results = votePercentages; // Placeholder for  results calculation logic
//    console.log(results); // Ensure right JSON is being sent
    res.json(results);
});

