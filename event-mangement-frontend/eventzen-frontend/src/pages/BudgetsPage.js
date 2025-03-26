import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";

const BudgetsPage = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/budgets");
        setBudgets(data);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      }
    };
    fetchBudgets();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Budgets</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Budget Name</th>
            <th>Total Amount</th>
            <th>Spent</th>
            <th>Remaining</th>
            {/* Admin actions */}
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget._id}>
              <td>{budget.budgetName}</td>
              <td>{budget.totalAmount}</td>
              <td>{budget.spent}</td>
              <td>{budget.totalAmount - budget.spent}</td>
              {/* If admin, show Edit/Delete buttons */}
              <td>
                <Button variant="warning" className="me-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BudgetsPage;
