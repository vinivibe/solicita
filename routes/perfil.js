const express = require('express');

const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');
const Task = require('../models/tasks');

router.get('/', ensureLoggedIn(), (req, res, next) => {
  res.render('perfil', req.user);
});

router.post('/', ensureLoggedIn(), (req, res, next) => {
  const { title, description, _id } = req.body;
  Task.create({ title, description, owner: _id }, (err, task) => {
    if (err) {
      console.log('An error happened:', err);
    } else {
      console.log('The user is saved and its value is: ', Task);
    }
  });
});

//   const { title, description } = req.body;
//   const taskNew = new Task({
//     owner_ID: req.user._id,
//     title,
//     description,
//   });
//   taskNew
//     .save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((error) => {
//       // eslint-disable-next-line no-console
//       console.log(error);
//     });
// });

module.exports = router;
