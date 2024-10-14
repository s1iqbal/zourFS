import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function RegisterForm() {

  useEffect(() => {
    const fetchData = async () => {
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='headers'>
        <h1 >Register Form</h1>
      </div>
      <div className='card'>
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter first name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Last Name" />
                    </Form.Group>
                </Col>
            </Row>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check style={{}} type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default RegisterForm
