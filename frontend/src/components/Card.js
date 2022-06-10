import TinderCard from "./SwipeCard";
import { Card as Block, Alert, Row, Col, Badge } from "react-bootstrap";
import React from "react";

const Card = ({ tweets, topic, includes }) => {
  const [opinion, updateOpinion] = React.useState("Swipe away ... 🔥");
  const [user, updateUser] = React.useState("");
  const [userDiscription, updateUserDiscription] = React.useState("");
  const [agreed, updateAgreed] = React.useState(0);
  const [disagreed, updateDisagreed] = React.useState(0);

  const [alertVariant, updateAlertVariant] = React.useState("secondary");
  const swiped = (dir, index, author) => {
    const data = includes.users.filter((user) => user.id === author);
    updateUser(data[0].name);
    updateUserDiscription(data[0].description);
    switch (dir) {
      case "right":
        updateAgreed((agreed) => agreed + 1);
        console.log(agreed);
        updateAlertVariant("success");
        return updateOpinion("You Agreed with");
      case "left":
        updateDisagreed((disagreed) => disagreed + 1);
        updateAlertVariant("danger");
        return updateOpinion("You Disagreed with");

      default:
        return;
    }
  };

  return (
    <>
      <Col>
        <Row>
          <Col className="d-flex justify-content-center my-3">
            <Badge bg="success">Agree: {agreed}</Badge>
          </Col>
          <Col className="d-flex justify-content-center my-3">
            <Badge bg="danger"> Disagree: {disagreed}</Badge>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Alert variant={alertVariant}>
              <Alert.Heading>
                {opinion} {!user ? null : user}{" "}
              </Alert.Heading>
              <p>{userDiscription}</p>
            </Alert>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <div className="cardContainer">
              {tweets.map((tweet, index) => (
                <TinderCard
                  key={index}
                  className="swipe"
                  onSwipe={(dir) => swiped(dir, index, tweet.author_id)}
                >
                  <Block style={{ height: "400px" }} className="tinderCard">
                    <Block.Header className="text-center">
                      {" "}
                      # {topic}
                    </Block.Header>
                    <Block.Body>
                      <Block.Text>{tweet.text}</Block.Text>
                    </Block.Body>
                  </Block>
                </TinderCard>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Card;
