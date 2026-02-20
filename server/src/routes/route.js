import express from "express";
import { getMessage } from "../controller.js/Contoller.js";

const route = express.Router();
route.get("/", getMessage);

export default route;