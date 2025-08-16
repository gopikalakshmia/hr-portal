import { useEffect, useRef, useState } from "react";
import LeaveApprovalModal from "./LeaveApprovalModal";
export default function EmployeeCard({ emp }) {
    const [leaveStatusModal, setLeaveStatusModal] = useState(false);
  
  const handleClose = () => {
    setLeaveStatusModal(false);
  };
    const handleLeaveStatus = () => {
    setLeaveStatusModal(true);
  };
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{emp.fullName}</h5>
        <p className="card-text">
          <strong>Email:</strong> {emp.username} <br />
          <strong>Role:</strong> {emp.role} <br />
          <strong>Department:</strong> {emp.department}
        </p>
        <button className="btn btn-primary" onClick={handleLeaveStatus}>Manage Leave</button>
        {/* Leave status modal */}
        <LeaveApprovalModal
          user={emp}
          isOpen={leaveStatusModal}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}
