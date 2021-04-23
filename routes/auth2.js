const express = require('express')
const passport = require('passport')
const config = require('../config/config')
const router = express.Router()


router.get('/login',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect',
      {
        response: res,
        resourceURL: config.resourceURL,
        customState: 'my_state',
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('Login was called in the Sample');
    res.redirect('/coachProfile'); //login will not be to todos
});

router.get('/openid/return',
  function(req, res, next) {
    console.log("get /openid/return");
    passport.authenticate('azuread-openidconnect',
      {
        response: res,
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/coachProfile');//this will be profile not todos
  });

router.post('/openid/return',
  function(req, res, next) {
    console.log("post /openid/return");
    passport.authenticate('azuread-openidconnect',
      {
        response: res,
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/coachProfile');
  });


router.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});

module.exports = router
