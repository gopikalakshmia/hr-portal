import { useEffect, useState } from "react";

export default function LeaveApprovalModal({ user, isOpen, onClose }) {
  const [leaveList, setLeaveList] = useState([]);

  useEffect(() => {
    const leaveData = JSON.parse(localStorage.getItem("LeaveDetails")) || [];
    const empLeaves = leaveData.filter((item) => item.email === user.username);
    setLeaveList(empLeaves);
  }, [user]);

  const updateLeaveStatus = (id, status) => {
    // update only the current user’s leaves
    const updatedList = leaveList.map((item) =>
      item.id === id ? { ...item, status } : item
    );

    setLeaveList(updatedList);

    // update full localStorage (not just this user's)
    const allLeaves = JSON.parse(localStorage.getItem("LeaveDetails")) || [];
    const newAllLeaves = allLeaves.map((item) =>
      item.id === id ? { ...item, status } : item
    );

    localStorage.setItem("LeaveDetails", JSON.stringify(newAllLeaves));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content shadow-lg">
            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Leave Details</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {leaveList && leaveList.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" style={{ width: "5%" }}>#</th>
                        <th scope="col">Leave Reason</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveList.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.leave}</td>
                          <td>
                            <span
                              className={`badge ${
                                item.status === "Approved"
                                  ? "bg-success"
                                  : item.status === "Rejected"
                                  ? "bg-danger"
                                  : "bg-warning text-dark"
                              }`}
                            >
                              {item.status || "Pending"}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-success me-2"
                              onClick={() => updateLeaveStatus(item.id, "Approved")}
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => updateLeaveStatus(item.id, "Rejected")}
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted text-center mb-0">
                  No leave details available.
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
