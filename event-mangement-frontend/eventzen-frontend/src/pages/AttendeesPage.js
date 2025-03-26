import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";

const AttendeesPage = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/attendees");
        setAttendees(data);
      } catch (error) {
        console.error("Error fetching attendees:", error);
      }
    };
    fetchAttendees();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Attendees</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
            {/* Admin actions */}
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <tr key={attendee._id}>
              <td>{attendee.name}</td>
              <td>{attendee.email}</td>
              <td>{attendee.event?.name}</td>
              {/* If admin, show Remove/Update */}
              <td>
                <Button variant="danger">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AttendeesPage;
