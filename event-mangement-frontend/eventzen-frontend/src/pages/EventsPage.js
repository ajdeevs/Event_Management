import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/events");

        setEvents(data);
      }
      catch {
        //handle error
      }
    };
    fetchEvents();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Events</h2>
      <Row>
        {events.map((event) => (
          <Col md={4} key={event._id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsPage;
