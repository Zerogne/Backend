const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Create a MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Reference to database
    const db = client.db('<dbname>'); // Replace with your database name
    
    // Example: Access a collection
    const collection = db.collection('users');
    // Perform operations, e.g., find documents
    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongoDB(); // Connect to MongoDB when server starts
});