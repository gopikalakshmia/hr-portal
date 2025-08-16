import { useNavigate } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

export default function Hr() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || [];
  const Employees = storedUser.filter((item) => item.role === "employee");

  const createNewEmp = () => {
    navigate("/signup");
  };

  return (
    <div className="container mt-4">
      {/* Add Employee Button */}
      <div className="mb-4 text-center">
        <button className="btn btn-primary" onClick={createNewEmp}>
          Create New Employee
        </button>
      </div>

      {/* Employee List */}
      <div className="row">
        {Employees.length > 0 ? (
          Employees.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <EmployeeCard emp={item} />
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No employees found.</p>
        )}
      </div>
    </div>
  );
}
