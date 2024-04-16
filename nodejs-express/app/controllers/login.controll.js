const passport = require('passport');
const pool = require('../config/db.config');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const User = (req, res) => {
  const { email, password } = req.body.data;
  bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) {
          console.error(err);
          res.status(500).send('Erreur lors du hachage du mot de passe');
          return;
      }
      pool.query("INSERT INTO public.user (email, password) VALUES ($1, $2)", [email, hash], function(err, result) {
          if (err) {
              res.status(400).send(err);
              return;
          }
          res.status(200).send(result.rows);
      });
  });
}

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    res.redirect('/');
  })(req, res, next);
};

module.exports = {User, googleAuth, googleAuthCallback}