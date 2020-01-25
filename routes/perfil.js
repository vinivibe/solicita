const express = require('express');

const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');
const task = require('../models/tasks');

router.post('/', ensureLoggedIn(), (req, res, next) => {
  const { title, description, _id, types, states } = req.body;
  task.create({ title, description, owner: _id, types, states }, (err, tasks) => {
    if (err) {
      console.log('An error happened:', err);
    } else {
      console.log('The user is saved and its value is: ', tasks);
      res.redirect('/perfil');
    }
  });
});

router.get('/', ensureLoggedIn(), (req, res, next) => {
  task.find(null, (err, tasks) => {
    if (err) {
      throw err;
    }
    res.render('perfil', { user: req.user, tasks });
  });
});



module.exports = router;
