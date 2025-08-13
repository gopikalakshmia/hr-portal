import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Dropdown } from "bootstrap";

export default function SignUp() {
  const [error, setError] = useState({
    fullName: "",
    username: "",
    password: "",
    role: "",
    department: "",
    email: "",
  });
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    role: "",
    department: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!user.fullName) newErrors.fullName = "Please fill the full name";
    if (!user.username) newErrors.username = "Please fill the username";
    if (!user.password) newErrors.password = "Please fill the Password";
    if (!user.department) newErrors.department = "Please fill the Department";
    if (!user.role) newErrors.role = "Please fill the role";

    let storedUser = JSON.parse(localStorage.getItem("user")) ?? [];
    storedUser.forEach((element) => {
      if (element.username === user.username) {
        newErrors.username = "Username is already registered";
        return;
      }
    });

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      storedUser.push(user);
      localStorage.setItem("user", JSON.stringify(storedUser));
      alert("Signup successful! Please log in.");
      navigate("/");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">SignUp</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name input */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={user.fullName}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, fullName: e.target.value }))
            }
            required
          />
          {error.fullName && (
            <div className="text-danger">{error.fullName}</div>
          )}
        </div>

        {/* Email input */}
        <div className="mb-3">
          <label className="form-label">Email (Username)</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your username (email)"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
          {error.username && (
            <div className="text-danger">{error.username}</div>
          )}
          {error.email && <div className="text-danger">{error.email}</div>}
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
