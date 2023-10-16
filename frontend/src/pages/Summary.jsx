import React from 'react'
import { Form, Button, Stack } from 'react-bootstrap'
import Header from '../component/Header'

const Summary = () => {
  return (
    <>
    <Header/>

    <Stack direction="horizontal" className="col-md-5 mx-auto py-6" gap={3} >
      <Form.Control className="me-auto" placeholder="Kitap ozeti ismini secin... " />
      <Button variant="success">Submit</Button>
    </Stack>
    </>
  )
}

export default Summary
