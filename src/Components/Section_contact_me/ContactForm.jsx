import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
export function FormEmail() {
  return (
    <div id="container__form" data-aos="zoom-out-down">
      <Form
        action="https://formsubmit.co/a678aefda091b06d29dc59a6fa49fdf7"
        method="POST"
      >
        {/* email 📧 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        {/* subject */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Subject</Form.Label>
          <Form.Control name="text" type="text" placeholder="Asunto" />
        </Form.Group>
        <>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              name="textarea"
              as="textarea"
              placeholder="Hello world"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_subject" value="Mensaje_portafolio!" />

        <input type="hidden" name="_captcha" value="false" />
        <hr />
        <div id="btn_submit">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
