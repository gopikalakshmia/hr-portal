export default function EmployeeCard({ emp }) {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{emp.fullName}</h5>
        <p className="card-text">
          <strong>Email:</strong> {emp.username} <br />
           <strong>Role:</strong> {emp.role} <br />
          <strong>Department:</strong> {emp.department}
        </p>
        <button className="btn btn-primary">Manage Leave</button>
      </div>
    </div>
  );
}
