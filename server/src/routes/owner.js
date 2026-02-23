import express from "express";
import { getmessage } from "../controllers/Controller.js";

const route = express.Router();
route.get("/",getmessage);