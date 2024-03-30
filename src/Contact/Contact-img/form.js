import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./form.css";

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>


            <Row className="mb-3 textar-fo">
                <Form.Group className="mb-3 w-100 h-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className=' h-100'
                        placeholder='Writte A Message'
                        as="textarea" rows={3} />
                </Form.Group>
            </Row>



            <Row className="mb-3 w-100 wid-fa">


                <Form.Group className='wid-te' as={Col} md="4" controlId="validationCustomUsername">

                    <InputGroup hasValidation>

                        <Form.Control
                            type="text"
                            placeholder="Full Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter fullname.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group className='wid-te' as={Col} md="4" controlId="validationCustomUsername">

                    <InputGroup hasValidation>

                        <Form.Control
                            type="text"
                            placeholder="E-Mail Adress"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose e-mail.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>



            <Button className='sub-fo-bu' type="submit">Submit</Button>
        </Form>
    );
}

export default FormExample;
