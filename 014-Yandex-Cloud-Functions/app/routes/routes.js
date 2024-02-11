const express = require('express');
const charactersStore = require('../store/character');
const model = require('../store/dbModel');
const router = express.Router();

model();

router.get('/api/characters', async (req, res) => {
  res.json(await charactersStore.getAll());
});

router.get('/api/character', 
    async (req, res, next) => {
        const id = req.query.id;
        const item = await charactersStore.get(id);
        if (!item) {
            return next(); 
        }
        return res.json(item); 
    }, 
);

module.exports = router;