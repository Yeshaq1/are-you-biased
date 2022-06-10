import axios from "axios";

const getTweets = async (topic) => {
  const baseUrl = "https://api.twitter.com/2/tweets/search/recent";

  const config = {
    params: {
      query: `"${topic}" is:verified lang:en -is:reply -is:retweet -is:quote`,
      "user.fields": "description,name,profile_image_url,public_metrics,url",
      expansions: "author_id,referenced_tweets.id",
      "tweet.fields": "public_metrics",
      sort_order: "relevancy",
    },
    headers: {
      Authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN,
    },
  };

  const tweets = await axios.get(baseUrl, config);
  console.log(tweets.data.includes);
  return tweets.data;
};

export { getTweets };
