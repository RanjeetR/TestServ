import mongoose from 'mongoose';

const guestSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    dob: String,
    doa: String
  });
module.exports = mongoose.model('GuestCollection',guestSchema);