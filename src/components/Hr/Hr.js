import EmployeeCard from "./EmployeeCard";

export default function Hr() {
  const storedUser = JSON.parse(localStorage.getItem("user")) || [];
  const Employees = storedUser.filter((item) => item.role === "employee");
  console.log(Employees);
  return (
    <div className="container">
      <div className="row">
        {Employees.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <EmployeeCard emp={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
