const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const cookiesParser = require('cookie-parser')
const router = require('./routes/index')
dotenv.config();

const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL|| "http://localhost:5173",  
    credentials: true 
}))
app.use(cookiesParser())
app.use(express.json()) 

// Connect to DB
connectDB();
// // Create an HTTP server from the Express app
// const server = http.createServer(app);

// // Initialize socket.io server using the HTTP server
// const io = new Server(server, {
//   cors: {
//       origin: process.env.FRONTEND_URL || "http://localhost:5173",
//       methods: ["GET", "POST"]
//   }
// });

// io.on('connection', (socket) => {
//   console.log('Client connected:', socket.id);

//   // Authentication (similar considerations as with ws)
//   // You might need to send an authentication event from the client
//   // and verify it here.

//   socket.on('chatMessage', (message) => {
//       console.log('Received message:', message);
//       // Broadcast the message to all connected clients
//       io.emit('message', message); // 'message' is a custom event name
//   });

//   socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//   });

//   socket.on('error', (err) => {
//       console.log('Socket.io Error:', err);
//   });
// });

// Routes
app.use('/api',router)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
