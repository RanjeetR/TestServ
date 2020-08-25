import leaderSchema from "../models/leaderCollection";

const updareScores = (request, response) => {
  const { id, score } = request.body;
  leaderSchema.findOne({ id: id }, function(err, leader) {
    if (!err) {
      if (!leader) {
        leader = new leaderSchema();
        leader.id = id;
      }
      leader.score = score;
      leader.save(function(err) {
        if (!err) {
          console.log("updated successfully");
          response.status(200).json({ leader });
        } else {
          console.log("Error: could not save contact " + leader.id);
          response.status(400).json("bad request");
        }
      });
    }
  });
};

export default updareScores;
