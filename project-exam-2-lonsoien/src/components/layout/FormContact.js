import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormContact() {
    return (
        <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" placeholder="Navn" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          <Button variant="send" type="submit">
            SEND
            
            </Button>
        </Form>
        </>
    );
}

export default FormContact