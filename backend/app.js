const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
require('dotenv').config(); 
const port = 3001;

const uri = process.env.MONGO_URI; 
const dbName = process.env.DB_NAME || 'cr-db';

app.get('/users', async (req, res) => {
  try {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = client.db(dbName);
    
    let users = await db.collection('users').find({}, { projection: { _id: 0 } }).sort({ firstname: 1 }).toArray();
    
    users = users.map(user => ({
      firstname: capitalize(user.firstname),
      lastname: capitalize(user.lastname),
      username: user.username,
      password: '******',
    }));

    client.close();

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Error fetching users');
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
