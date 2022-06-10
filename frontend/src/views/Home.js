import React, { useReducer } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Card from "../components/Card";
import Explainer from "../components/Explainer";
import TopicForm from "../components/TopicForm";
import { tweetReducer } from "../reducers/tweetReducer";
import { tweetAction } from "../actions/tweetsAction";

const Home = () => {
  const initialState = { loading: false, tweets: [] };
  const [state, dispatch] = useReducer(tweetReducer, initialState);

  async function getTweets(topic) {
    dispatch({ type: "loading", payload: topic });
    try {
      const tweets = await tweetAction(topic);
      dispatch({ type: "success", payload: tweets });
    } catch (error) {
      dispatch({
        type: "failure",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }

  return (
    <>
      {state.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
          <Row>
            <Col>
              <Explainer />
            </Col>
          </Row>
          <Row>
            <TopicForm submit={getTweets} />
          </Row>

          {state.tweets && state.tweets.length > 1 ? (
            <>
              <Row className="my-5">
                <Card
                  tweets={state.tweets}
                  includes={state.includes}
                  topic={state.topic}
                />
              </Row>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Home;
