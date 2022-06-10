import express from "express";
import { getCardTweets } from "../controllers/twitterController.js";

const router = express.Router();

router.route("/:topic").get(getCardTweets);

export default router;
