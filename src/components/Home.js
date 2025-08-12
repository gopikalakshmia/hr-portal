import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState({ username: "", password: "", role: "" });
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!user.username) newErrors.username = "Please fill the username";
    if (!user.password) newErrors.password = "Please fill the Password";
    if (!user.role) newErrors.role = "Please fill the role";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed
      console.log("user", user);
      if(localStorage.getItem("user")){
        const storedUser=JSON.parse(localStorage.getItem("user"));
      console.log(user);
      }
    }
  };

 return (
  <div className="container mt-5" style={{ maxWidth: "400px" }}>
    <h2 className="mb-4">Login</h2>

    <form onSubmit={handleSubmit}>
      {/* Username input */}
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, username: e.target.value }))
          }
          required
        />
        {error.username && <div className="text-danger">{error.username}</div>}
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
        {error.password && <div className="text-danger">{error.password}</div>}
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
          Login
        </button>
        <Link to="/signup">SignUp</Link>
      </div>
    </form>
  </div>
);

}
