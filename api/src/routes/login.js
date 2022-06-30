require('dotenv').config();
const passport = require('passport');
const { User } = require('../database/postgres');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oidc');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const baseURL = process.env.CLIENT_URL || 'http://localhost:3000';

const loginGoogle = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/login/oauth2/redirect/google'
  },
  async (_, profile, cb) => {
    const user = await User.findOne({
      where: {
        email: profile.emails[0].value
      }
    });
    if (user) {
      return cb(null, user);
    }
    return cb(null, { message: 'Incorrect username or password' });
  }
);

// force use because name is not unique
passport._strategies.loginGoogle = loginGoogle;
passport._strategies.loginGoogle.name = 'loginGoogle';

router.get('/', async (req, res) => {
  const user = await User.findByPk(req?.session?.passport?.user?.id);
  if (user) {
    return res.send(user);
  } else {
    res.send({
      message: 'Al parecer este usuario no esta registrado 😮',
      status: 401
    });
    // openhandle detected!
  }
});

router.get(
  '/google',
  passport.authenticate('loginGoogle', {
    scope: ['email', 'profile']
  })
);

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('loginGoogle', {
    failureRedirect: '/login',
    failureMessage: true
  }),
  function (req, res) {
    // if (!req.user.message) {
    //   res.redirect(`${baseURL}/home`);
    // } else {
    //   res.redirect(`${baseURL}/login`);
    // }
    res.redirect(`${baseURL}/home`);
  }
);

passport.serializeUser((user, cb) => {
  return cb(null, user);
});

passport.deserializeUser((user, cb) => {
  return cb(null, user);
});

router.post('/logout', function (req, res) {
  req.logout();
  res.send({
    message: 'Logged out'
  });
});

// Login Local
passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    const user = await User.findOne({
      where: {
        email: username
      }
    });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return cb(null, user);
      }
      return cb(null, { message: 'Contraseña incorrecta' });
    }
    return cb(null, { message: 'Este email no esta registrado' });
  })
);

/* router.get('/admin', (req, res) => {
  console.log('Logeado');
  res.redirect('http://localhost:4000/home/true');
});
*/

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/login/local/error'
  }),
  (req, res) => {
    console.log(req.user);
    const { admin } = req.query;
    if (admin) {
      if (req.user.rol.toLowerCase() === 'admin') {
        return res.status(200).send({
          message: 'Login successfully'
        });
      }
      return res.send({
        message: 'You are not an administrator'
      });
    }

    return res.status(200).send(req.user);
  }
);

module.exports = router;
