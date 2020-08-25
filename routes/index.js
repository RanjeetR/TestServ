const routes = require("express").Router();
import getLeader from "./getLeaders";
import updateScore from "./updateScore";

routes.use("/all", getLeader);
routes.use("/update", updateScore);

export default routes;
