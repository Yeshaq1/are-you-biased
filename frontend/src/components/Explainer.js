import React from "react";
import { Alert } from "react-bootstrap";

const Explainer = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading> 👋 Hey, Want to test your Bias?</Alert.Heading>
        <p>
          Agree or disagree with content without knowing the Author. Enter a
          Topic and Swipe away!
        </p>
      </Alert>
    </>
  );
};

export default Explainer;
