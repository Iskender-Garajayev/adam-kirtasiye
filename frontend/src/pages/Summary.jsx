import React from 'react'
import { Form, Button, Stack } from 'react-bootstrap'
import Header from '../component/Header'

const Summary = () => {
  return (
    <>
    <Header/>

    <Stack direction="horizontal" className="col-md-5 mx-auto py-6" gap={3} >
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
    </Stack>
    </>
  )
}

export default Summary
