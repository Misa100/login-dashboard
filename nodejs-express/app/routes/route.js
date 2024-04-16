const express = require('express');
const router = express.Router();

const loginControll = require('../controllers/login.controll')
router.post('/login', loginControll.User);
router.get('/auth/google', loginControll.googleAuth);
router.get('/auth/google/callback', loginControll.googleAuthCallback);

router.get('/dashboard', (req, res) => {
     if (!req.user) {
       return res.redirect('/login');
     }
     res.sendFile(path.join(__dirname, 'path_to_dashboard.html'));
   });
   

module.exports = router;