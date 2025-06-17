const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const client = new Client({
  host: 'uqyuhmovgfpklefywmpv.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'SAGARKASHYAP8',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false, // Required for Supabase SSL
  },
  family: 4, // ⬅️ Force IPv4 only
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL database successfully!');
  })
  .catch(err => {
    console.error('❌ Failed to connect to PostgreSQL database:', err.message);
  });

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express + PostgreSQL!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
