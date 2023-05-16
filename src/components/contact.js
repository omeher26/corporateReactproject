import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const AppContact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>

        <Form className="contact-form" >
          <Row>
            <Col sm={4} >
              <Form.Control placeholder="Enter your full name" required />
            </Col>
            <Col sm={4} >
              <Form.Control placeholder="Enter your email address" required/>
            </Col>
            <Col sm={4} >
              <Form.Control placeholder="Enter your contact number" required/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} >
              <Form.Control as="textarea" placeholder="Enter your message" required/> 
            </Col>
          </Row>
          <div className="btn-holder" >
            <Button type="submit" >Submit</Button>
          </div>
        </Form>

      </Container>

      <div className="google-map" >
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85615.53134112974!2d73.90229881274456!3d19.094775697560877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd3bc79edfe4b3%3A0x62f4f1382413b970!2sSahkar%20Ganesh%20Mandir!5e0!3m2!1sen!2sin!4v1684215806593!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Container fluid >
        <div className="contact-info" >
          <ul>
            <li> <i class="fas fa-envelope" ></i> onkarmeher265@gmail.com </li>
            <li> <i class="fas fa-phone" ></i> 111-222-333</li>
            <li> <i class="fas fa-map-marker-alt" ></i> Pune,Narayangaon</li> 
          </ul>
        </div>
      </Container>

    </section>
  );
};

export default AppContact;
