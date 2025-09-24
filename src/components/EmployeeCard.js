import React from 'react';

function EmployeeCard() {
  const employees = [
    {
      id: 1,
      name: "Prajakta",
      email: "prajakta@example.com",
      department: "UI/UX",
      emoji: "💻",
      color: "#f8b195"
    },
    {
      id: 2,
      name: "Poonam",
      email: "poonam@example.com",
      department: "Frontend",
      emoji: "💻",
      color: "#c06c84"
    },
    {
      id: 3,
      name: "Tejaswi",
      email: "tejaswi@example.com",
      department: "Backend",
      emoji: "💻",
      color: "#355c7d"
    },
    {
      id: 4,
      name: "Advaitha",
      email: "advaitha@example.com",
      department: "QA",
      emoji: "💻",
      color: "#6c5b7b"
    },
    {
      id: 5,
      name: "Saika",
      email: "saika@example.com",
      department: "DevOps",
      emoji: "💻",
      color: "#f67280"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Employee Directory</h2>
      <div className="row">
        {employees.map(emp => (
          <div className="col-md-4 mb-3" key={emp.id}>
            <div className="card h-100 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: emp.color,
                  height: '200px',
                  fontSize: '64px',
                  borderRadius: '12px',
                  color: '#fff'
                }}
              >
                {emp.emoji}
              </div>
              <div className="card-body">
                <h5 className="card-title">{emp.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {emp.email}<br />
                  <strong>Department:</strong> {emp.department}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCard;