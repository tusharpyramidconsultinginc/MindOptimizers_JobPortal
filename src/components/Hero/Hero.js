import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import heroimgmain from "../../assests/banner-1.png";
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={classes.hero}>
      <Container className={`container ${classes.heroitems}`}>
        <Row className={classes.toprow}>
          <Col className={classes.herotitlebutton} md={6}>
            <div className={classes.title}>
              <h1>Welcome to</h1>
              <h1 className="coloredtitle">our help center</h1>
              <p>
                <em>
                  Please upload required files below to start the process.
                </em>
              </p>
            </div>
            <div className={classes.herobutton}>
              <Link to="/upload-resume">
                <button>Upload Resume</button>
              </Link>
              <Link to="/upload-jd">
                <button>Upload Job Description</button>
              </Link>
            </div>
          </Col>
          <Col className={classes.heroimg} md lg={6} data-aos={"fade-left"}>
            <img src={heroimgmain} alt="professionals working" width="500px" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
