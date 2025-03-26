import React from "react";
import { Container, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", height: "80vh" }}>
      <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "100%" }}>
        <h1 className="text-white">Plan Your Perfect Event</h1>
        <p className="text-white">Find the best venues, vendors, and more</p>
        <Button variant="light" size="lg">Get Started</Button>
      </Container>
    </div>
  );
};

export default HomePage;
