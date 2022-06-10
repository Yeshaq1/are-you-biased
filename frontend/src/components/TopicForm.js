import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const TopicForm = ({ submit }) => {
  const [topic, updateTopic] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    updateTopic(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submit(topic);
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Col>
            <Form.Label>Enter a topic to start</Form.Label>
            <Form.Control
              type="text"
              name="topic"
              value={topic}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Need inspiration? Try Global Warming or Pineapple on Pizza
            </Form.Text>
          </Col>
        </Form.Group>
        <Col className=" d-flex align-items-center ">
          <Button type="submit" variant="outline-dark">
            Discover
          </Button>
        </Col>
      </Form>
    </>
  );
};

export default TopicForm;
