import express from "express";
<<<<<<< HEAD
import { getMessage } from "../controllers/Contoller.js";
=======
import { getMessage } from "../controller.js/Contoller.js";
>>>>>>> 9d3bc51a068848e38f3e7641690912057b4f12af

const route = express.Router();
route.get("/", getMessage);

export default route;