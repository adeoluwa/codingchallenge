import express from 'express'
import {getFilmLocations} from "../controllers/filmLocation.controller"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SF Movies
 *   description: API endpoints for managing searching Movies 
 */

/**
 * @swagger
 * /api/searchMovies:
 *   get:
 *     summary: Search for film locations by title
 *     description: Retrieve film locations based on the title of the film
 *     parameters:
 *       - in: query
 *         name: title
 *         description: The title of the film to search for
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: A list of film locations matching the search criteria
 *       500:
 *         description: Internal Server Error
 */

router.get('/searchMovies', getFilmLocations)

export default router;

