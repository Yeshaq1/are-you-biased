import { getTweets } from "../config/twitter.js";
import asyncHandler from "express-async-handler";

const getCardTweets = asyncHandler(async (req, res) => {
  const tweets = await getTweets(req.params.topic);
  if (tweets.data) {
    res.json(tweets);
  } else {
    throw new Error("Oops we have hit a snag, try another topic");
  }
});

export { getCardTweets };
