'use strict';

import express from 'express';
const router = express.Router();
import Chores from './chores_model.js';

router.get('/chores'. auth, (req,res) => {
  Chores 
    .find()
    .then(chores => res.send(chores));
});

export default Chores;
