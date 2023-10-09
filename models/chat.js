const mongoose = require('mongoose');

const ReceiverSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  receivers: [ReceiverSchema], // Array of receiver objects with ID and name
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
},
{
  timestamps: true,
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
