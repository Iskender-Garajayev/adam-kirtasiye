import React from "react";
import Header from "../component/Header";
import { Button, Container, Form, Stack } from "react-bootstrap";

const Books = () => {
  return (
    <>
      <Header />

      <Container className="">
        <Stack
          direction="horizontal"
          style={{ paddingTop: "15px" }}
          className="col-md-5 mx-auto py-6"
          gap={3}
        >
          <Form.Control
            className="me-auto"
            placeholder="Kitap ismini secin..."
          />
          <Button variant="success">Submit</Button>
        </Stack>
      </Container>
    </>
  );
};

export default Books;
