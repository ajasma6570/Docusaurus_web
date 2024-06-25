const express = require('express')
const sequelize = require('./database');
const Doc = require('./models/Doc');
const cors = require('cors');


const app = express(); 
app.use(cors())


  async function initializeDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync();  // Sync all models
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Define a POST route to create new docs
  app.post('/docs', async (req, res) => {
    try {
      const { title, content } = req.body;
      console.log(title);
      const newDoc = await Doc.create({ title, content });
      res.status(201).json(newDoc);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Define a GET route to retrieve all docs
  app.get('/docs', async (req, res) => {
    try {
      const docs = await Doc.findAll();
      res.status(200).json(docs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Define a GET route to retrieve a single doc by ID
  app.get('/docs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const doc = await Doc.findByPk(id);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
   
  app.listen(4000, () => {
    console.log('Server started on port 4000.');
    initializeDatabase();
  });