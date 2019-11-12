import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => (
  <Form
    className="pageclip-form"
    action="https://send.pageclip.co/czD3ByyXFBGySf4UYj5Xl5d9LbVkIi0L"
    method="POST"
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
);

export default ContactForm;
