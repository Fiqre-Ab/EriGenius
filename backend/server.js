const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/apply', require('./routes/apply'));
app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
    res.send('Backend is working for EriGenius!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
