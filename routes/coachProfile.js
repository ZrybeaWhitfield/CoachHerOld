const express = require('express')
const router = express.Router()
const multer = require("multer")
const coachesController = require('../controllers/coaches')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, coachesController.getCoachProfile)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)
//
// router.put('/markIncomplete', todosController.markIncomplete)
//
// router.delete('/deleteTodo', todosController.deleteTodo)
// const storage = multer.diskStorage({
// destination: (req, file, cb) => {
//   cb(null,'public/img')
//   console.log("1",file);
// },
// filename: (req, file, cb) => {
//   cb(null, file.fieldname + '-' + Date.now() + ".png")
//       console.log("2", file);
// }
// })
// const upload = multer({storage: storage})
//   router.post('/profilePic', upload.array('file-to-upload', 3), (req, res) => {
//     console.log(req.files);
//     db.collection('profilePics').save({name: req.body.name, msg: req.body.msg, posterID: req.user._id, thumbUp: 0, thumbDown:0, images: req.files.map(f => 'img/' + f.filename)}, (err, result) => {
//       if (err) return console.log(err)
//       console.log('saved to database')
//       res.redirect('/athleteProfile')
//     })
//   })

module.exports = router
