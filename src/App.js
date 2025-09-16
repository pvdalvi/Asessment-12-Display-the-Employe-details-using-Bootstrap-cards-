import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./redux/actions";
import { selectEmployees } from "./redux/selectors";
import EmployeeCard from "./components/EmployeeCard";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

 return (
  <Container className="mt-4">
    <h1 className="text-center">Employee Directory</h1>
    <Row>
      {employees.length === 0 ? (
        <p className="text-center w-100">⚠️ No employees found!</p>
      ) : (
        employees.map((emp) => (
          <Col key={emp.id} sm={6} md={4} lg={3}>
            <EmployeeCard employee={emp} />
          </Col>
        ))
      )}
    </Row>
  </Container>
);
}

export default App;
