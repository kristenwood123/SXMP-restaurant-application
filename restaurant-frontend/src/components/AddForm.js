import React from "react";
import { Form, Button } from "react-bootstrap";
import { useGlobalContext } from "../contexts/context";

export const AddForm = () => {
  const { newRestaurant, setNewRestaurant } = useGlobalContext();
  const { name, description, address } = newRestaurant;

  const handleInputChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewRestaurant({ ...newRestaurant, name, description, address });
    fetch("http://localhost:8080/restaurants/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => {
        console.log("New restaurant added!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name *"
          value={name}
          name="name"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Description *"
          name="description"
          value={description}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Address *"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Restaurant
      </Button>
    </Form>
  );
};

export default AddForm;
