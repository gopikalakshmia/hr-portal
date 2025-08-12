import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Dropdown } from "bootstrap";

export default function SignUp() {
  const [error, setError] = useState({
    username: "",
    password: "",
    role: "",
    department: "",
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
    department: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!user.username) newErrors.username = "Please fill the username";
    if (!user.password) newErrors.password = "Please fill the Password";
    if (!user.department) newErrors.department = "Please fill the Department";
    if (!user.role) newErrors.role = "Please fill the role";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed
      console.log("user", user);
      let storedUser=[];
      storedUser=localStorage.getItem("user")||[];
      storedUser.push(user);
      localStorage.setItem("user",JSON.stringify(storedUser) );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">SignUp</h2>

      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
          {error.username && (
            <div className="text-danger">{error.username}</div>
          )}
        </div>
        {/* Department input */}
        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            className="form-select"
            value={user.department}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, department: e.target.value }))
            }
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            <option>Finance</option>
            <option>HR</option>
            <option>Marketing</option>
          </select>
          {error.department && (
            <div className="text-danger">{error.department}</div>
          )}
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          {error.password && (
            <div className="text-danger">{error.password}</div>
          )}
        </div>

        {/* Role radios */}
        <div className="mb-3">
          <label className="form-label me-3">Login as:</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="hr"
              value="hr"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, role: e.target.value }))
              }
              required
            />
            <label className="form-check-label" htmlFor="hr">
              HR
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="employee"
              value="employee"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, role: e.target.value }))
              }
            />
            <label className="form-check-label" htmlFor="employee">
              Employee
            </label>
          </div>
          {error.role && <div className="text-danger">{error.role}</div>}
        </div>

        {/* Buttons */}
        <div>
          <button className="btn btn-primary me-3" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
