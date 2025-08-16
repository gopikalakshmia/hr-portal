import { useEffect, useRef, useState } from "react";
import DetailsModal from "./DetailsModal";
import LeaveStatusModal from "./LeaveStatusModal";

export default function Employee() {
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser")) || {};

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [leaveStatusModal, setLeaveStatusModal] = useState(false);
  const leave = useRef();
  const [leaveList, setLeaveList] = useState([]);

  const handleDetails = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setLeaveStatusModal(false);
  };

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const leaveData = JSON.parse(localStorage.getItem("LeaveDetails")) || [];
    const loggedinUserDta = leaveData.filter(
      (item) => item.email === loggedInUser.username
    );
    setLeaveList([...loggedinUserDta]);
  }, []);

  const handleLeaveStatus = () => {
    const leaveData = JSON.parse(localStorage.getItem("LeaveDetails")) || [];
    const loggedinUserDta = leaveData.filter(
      (item) => item.email === loggedInUser.username
    );
    setLeaveList([...loggedinUserDta]);
    setLeaveStatusModal(true);
  };

  const handleLeave = () => {
    const leaveVal = leave.current.value.trim();
    if (leaveVal === "") {
      setError(true);
      return;
    }
    setError(false);

    const existingLeave = JSON.parse(localStorage.getItem("LeaveDetails")) || [];
    const newLeave = {
      id: random(1, 20),
      email: loggedInUser.username,
      leave: leaveVal,
      status: "Not Approved",
    };
    const fullLeaveList = [...existingLeave, newLeave];
    setLeaveList([...fullLeaveList]);
    localStorage.setItem("LeaveDetails", JSON.stringify(fullLeaveList));
    leave.current.value = "";
    alert("Leave applied successfully!");
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* User Details Card */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Welcome {loggedInUser.fullName}!</h5>
              <p className="text-muted">({loggedInUser.username})</p>
              <button className="btn btn-primary mt-2" onClick={handleDetails}>
                View Profile Details
              </button>
              <DetailsModal
                user={loggedInUser}
                isOpen={isOpen}
                onClose={handleClose}
              />
            </div>
          </div>
        </div>

        {/* Leave Application Card */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Apply for Leave</h5>
              <div className="mb-3">
                <label className="form-label fw-semibold">Reason</label>
                <textarea
                  ref={leave}
                  className="form-control"
                  rows="3"
                  placeholder="Enter your leave reason..."
                />
                {error && (
                  <small className="text-danger">
                    Reason for leave cannot be blank
                  </small>
                )}
              </div>
              <button className="btn btn-success w-100" onClick={handleLeave}>
                Apply Leave
              </button>
            </div>
          </div>
        </div>

        {/* Leave Status Card */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Leave Status</h5>
              <p className="text-muted">
                View all applied leaves and approval status
              </p>
              <button
                className="btn btn-outline-primary w-100"
                onClick={handleLeaveStatus}
              >
                View Leave Status
              </button>
              <LeaveStatusModal
                leaveData={leaveList}
                isOpen={leaveStatusModal}
                onClose={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
