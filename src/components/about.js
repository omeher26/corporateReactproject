import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg'

const AppAbout = () => {

    const html = 80;
    const responsive = 95;
    const bootstrap = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder" >
            <h2>About us</h2>
            <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6} > <Image src={img1} /> </Col>
          <Col sm={6} >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae non illo incidunt? Reprehenderit accusamus, corporis vero, at quod dignissimos adipisci distinctio enim, dicta illum et officiis doloremque nobis corrupti.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde atque quos repudiandae officia molestiae voluptate fugit. Quae, inventore praesentium?</p>

            <div className="progress-block" >
                <h4>HTML / CSS / JAVASCRIPT</h4>
                <ProgressBar now={html} label={`${html}%`} />
            </div>

            <div className="progress-block" >
                <h4>RESPONSIVE</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>

            <div className="progress-block" >
                <h4>BOOTSTRAP</h4>
                <ProgressBar now={bootstrap} label={`${bootstrap}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppAbout;
