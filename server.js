const express         = require("express")
const app             = express()
const mongoose        = require("mongoose")
const passport        = require('passport')
const session         = require("express-session")
const multer          = require("multer")
const MongoStore      = require("connect-mongo")(session)
const connectDB       = require("./config/database")
const server          = require('http').Server(app)
const io              = require('socket.io')(server)
const authRoutes      = require("./routes/auth")
const authRoutes2     = require("./routes/auth2")
const homeRoutes      = require("./routes/home")
const athleteRoutes   = require("./routes/athleteProfile")
const coachRoutes     = require("./routes/coachProfile")


require("dotenv").config({path: "./config/.env"})

//passport config
require("./config/passport")(passport)

connectDB()


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),

    })
  )


app.use(passport.initialize())
app.use(passport.session())

app.use("/", homeRoutes)
app.use("/auth", authRoutes)
app.use("/auth2", authRoutes2)
app.use("/athleteProfile", athleteRoutes)
app.use("/coachProfile", coachRoutes)

app.get('/room/:room', (req,res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) =>{
    console.log(roomId, userId);
    socket.join(roomId)
    // socket.to(roomId).broadcast.emit('user-connected', userId)
    socket.broadcast.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
     socket.broadcast.to(roomId).emit('user-disconnected', userId)
    })

  })
})

server.listen(process.env.PORT, ()=>{
  console.log(`Server is running! Whoo look at him go!`);
})
