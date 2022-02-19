import React from "react";
import { Form, Button } from "react-bootstrap";

export const AddForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Name *" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Description *" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Address *"
          rows={3}
          name="address"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="city" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Zip code" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Add New Restaurant
      </Button>
    </Form>
  );
};

export default AddForm;
