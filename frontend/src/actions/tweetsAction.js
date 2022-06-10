import axios from "axios";

export const tweetAction = async (topic = "lol") => {
  const url = `tweets/${topic}`;
  const tweets = await axios.get(url);
  return tweets.data;
};
