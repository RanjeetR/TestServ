import mongoose from "mongoose";

const leaderSchema = mongoose.Schema({
  id: Number,
  leaderName: String,
  score: Number
});
module.exports = mongoose.model("leaderCollection", leaderSchema);
