import React from "react";
import { Card } from "react-bootstrap";

function EmployeeCard({ employee }) {
  return (
    <Card className="m-3 shadow" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{employee.role}</Card.Subtitle>
        <Card.Text>
          <strong>Department:</strong> {employee.department} <br />
          <strong>Salary:</strong> {employee.salary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;
