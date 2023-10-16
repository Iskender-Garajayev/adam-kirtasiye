import React from "react";
import { Form, Button, Stack, Container } from "react-bootstrap";
import Header from "../component/Header";

const Summary = () => {
  return (
    <>
      <Header />

      <Container>
        <Stack
          direction="horizontal"
          style={{ paddingTop: "15px" }}
          className="col-md-5 mx-auto py-6"
          gap={3}
        >
          <Form.Control
            className="me-auto"
            placeholder="Kitap ozeti ismini secin... "
          />
          <Button variant="success">Submit</Button>
        </Stack>
      </Container>
    </>
  );
};

export default Summary;
