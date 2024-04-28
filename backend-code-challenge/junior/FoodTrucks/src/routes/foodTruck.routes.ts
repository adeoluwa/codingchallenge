import express from "express";
import { getFoodTrucks } from "../controllers/foodTruck.Controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Food Trucks
 *   description: API endpoints for managing food trucks
 */

/**
 * @swagger
 * /api/foodtrucks:
 *   get:
 *     summary: Get a list of food trucks near a specific location
 *     tags: [Food Trucks]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *         required: true
 *         description: Latitude of the location
 *       - in: query
 *         name: long
 *         schema:
 *           type: number
 *         required: true
 *         description: Longitude of the location
 *     responses:
 *       200:
 *         description: A list of food trucks near the specified location
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   location:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: number
 *                       long:
 *                         type: number
 */

router.get("/foodtrucks", getFoodTrucks);

export default router;
