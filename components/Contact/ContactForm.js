import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  useEffect(() => () => {
    setStatus('');
  }, [setStatus]);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <>
      {
        status === 'SUCCESS' && <div className="success-flash">Message Sent</div>
      }
      {
        status === 'ERROR' && <div className="error-flash">Message Cannot Be Delivered</div>
      }
      <Form
        className="pageclip-form"
        action="https://formspree.io/xoqqdbqb"
        method="POST"
        onSubmit={onSubmit}
      >
        <Form.Group controlId="name">
          <Form.Label>Your Name (required)</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Your Email Address (required)</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" />
        </Form.Group>
        <Form.Group controlId="email-body">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            name="message"
            placeholder="Tell me about your idea, project or any software issues you are facing"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Send
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
