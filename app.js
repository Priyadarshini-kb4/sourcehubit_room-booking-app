// app.js

const express = require('express');
const app = express();

// 👇 Use dynamic port from environment (required for Azure)
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initial data
let rooms = ['101', '102', '103'];
let bookings = [];

// Get available rooms
app.get('/rooms', (req, res) => {
  res.json({ availableRooms: rooms });
});

// Book a room
app.post('/book', (req, res) => {
  const { room, name } = req.body;
  if (!rooms.includes(room)) {
    return res.status(404).json({ error: 'Room not available' });
  }
  bookings.push({ room, name });
  rooms = rooms.filter(r => r !== room);
  res.json({ message: 'Room booked successfully', bookings });
});

// Get all bookings
app.get('/bookings', (req, res) => {
  res.json({ bookings });
});

// Start server
app.listen(PORT, () => {
  console.log(`Room booking app running on port ${PORT}`);
});
