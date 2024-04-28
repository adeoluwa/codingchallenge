import express from "express"
import {renderMovieLocation} from "../controllers/filmLocation.controller"

const router = express.Router();

router.get("/", renderMovieLocation)

export default router;