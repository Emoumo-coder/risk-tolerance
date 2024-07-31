const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolioRoutes');
const bodyParser = require('body-parser');

dotenv.config();

connectDB();

// Initialize Express app
const app = express();
app.use(bodyParser.json());


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Application is running"));

app.use('/api/portfolios', portfolioRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
