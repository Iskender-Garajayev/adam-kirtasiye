import React from 'react'
import { Form, Button, Stack } from 'react-bootstrap'

const Summary = () => {
  return (
    <Stack direction="horizontal" className="col-md-5 mx-auto" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
    </Stack>
  )
}

export default Summary
