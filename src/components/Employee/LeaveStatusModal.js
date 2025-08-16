export default function LeaveStatusModal({ leaveData, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
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
              {leaveData && leaveData.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" style={{ width: "5%" }}>#</th>
                        <th scope="col">Leave Reason</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveData.map((item, index) => (
                        <tr key={index}>
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
                              {item.status?item.status:"Not Approved"}
                            </span>
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
