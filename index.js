const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Replace [YOUR-PASSWORD] with your actual Supabase password
const connectionString = 'postgresql://postgres:SAGARKASHYAP8@db.uqyuhmovgfpklefywmpv.supabase.co:5432/postgres';

const client = new Client({
  connectionString: connectionString,
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL database successfully!');
  })
  .catch(err => {
    console.error('❌ Failed to connect to PostgreSQL database:', err.message);
  });

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express + PostgreSQL!');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
