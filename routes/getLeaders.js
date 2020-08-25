import path from "path";
import leaderSchema from "../models/leaderCollection";

const leaderObject = [
  {
    id: 1,
    leaderName: "one",
    score: 100
  },
  {
    id: 2,
    leaderName: "two",
    score: 100
  },
  {
    id: 3,
    leaderName: "three",
    score: 100
  },
  {
    id: 4,
    leaderName: "Four",
    score: 100
  }
];

const getLeaders = (req, res) => {
  //var leaderModels = mongoose.model("tests", leaderSchema);

  leaderSchema.find({}, function(err, users) {
    if (!users.length) {
      leaderSchema
        .insertMany(leaderObject)
        .then(docs => res.send(docs))
        .catch(err => console.log(err));
    } else {
      res.send(users);
    }
  });
};

export default getLeaders;
