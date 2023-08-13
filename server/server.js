const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UsersMsg = require('./UserModel');
require('dotenv').config({ path: './.env' });
var bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB Connection Successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/', async (req, res) => {
  res.send('Your are runnung on server ');
});

// app.post('/user-message', async (req, res) => {
//   const { name, email, message } = req.body;
//   const emailRegex = /\S+@\S+\.\S+/;
//   const user = new UsersMsg({ name, email, message });

//   if (!emailRegex.test(req.body.email)) {
//     return res.status(400).json({ error: 'Invalid email format' });
//   }
//   console.log(user);
//   const userMessage = await user.save();

//   console.log(userMessage);
//   if (userMessage) {
//     res.status(201).json({
//       message: `Your Message Is successfully Send`,
//     });
//   }
// });

app.post('/user-message', async (req, res) => {
  const { name, email, message } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  // Validate the email format
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Create the user message object and save it to the database
    await new UsersMsg({ name, email, message }).save();

    // Respond to the client
    res.status(201).json({
      message: 'Your message was successfully sent',
    });

    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('message', () => {
        // Process the message
        // Notify other connected clients about the new message
        io.emit('notification', 'New message received');
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
  } catch (error) {
    // Handle database or other errors
    console.error('Error saving user message:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while saving your message' });
  }
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  // console.log('Received login request:', req.body);
  // console.log(process.env.USERNAME, process.env.PASSWORD);

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    console.log('Admin user logged in:', username);
    res.status(201).json({ message: 'Admin User granted permissions' });
  } else {
    console.log('Invalid login attempt for user:', username);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/user-backend', async (req, res) => {
  const userMessages = await UsersMsg.find();
  console.log(userMessages);
  res.json(userMessages);
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
