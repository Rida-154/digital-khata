import express from "express";
import { getMessage } from "../controllers/Contoller.js";

const route = express.Router();
route.get("/", getMessage);

export default route;