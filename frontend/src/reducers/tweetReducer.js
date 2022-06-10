export const tweetReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, topic: action.payload };

    case "success":
      return {
        ...state,
        loading: false,
        tweets: action.payload.data,
        includes: action.payload.includes,
        error: null,
      };

    case "failure":
      return { loading: false, error: action.payload };

    default:
      return { state };
  }
};
