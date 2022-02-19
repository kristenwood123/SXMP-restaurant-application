import React from "react";
import { Form, Button } from "react-bootstrap";

export const AddForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Restaurant name</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="password" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="password" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="password" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Zip code</Form.Label>
        <Form.Control type="password" placeholder="Zip code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddForm;
