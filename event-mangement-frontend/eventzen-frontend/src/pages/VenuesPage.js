import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const VenuesPage = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/venues");
        setVenues(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };
    fetchVenues();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Venues</h2>
      <Row>
        {venues.map((venue) => (
          <Col md={4} key={venue._id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <Card.Text>Location: {venue.location}</Card.Text>
                <Card.Text>Capacity: {venue.capacity}</Card.Text>
                {/* If admin, show Edit/Delete buttons */}
                <Button variant="primary" className="me-2">View Details</Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VenuesPage;
