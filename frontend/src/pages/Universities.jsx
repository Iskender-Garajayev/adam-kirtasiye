import {Container, Row, Col, Card} from 'react-bootstrap'
import React from 'react'

const Universities = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center" gap={5}>

          <Col gap={5} >
          <Card gap={5} bg='Info' border="primary" style={{ width: '25rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
          </Col>


          <Col>
          <Card border="danger" style={{ width: '25rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
          </Col>


          <Col>
          <Card border="warning" style={{ width: '25rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Universities
