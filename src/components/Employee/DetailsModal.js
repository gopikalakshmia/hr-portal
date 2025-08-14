export default function DetailsModal({ user, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">User Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <p>
                <strong>Full Name:</strong> {user?.fullName || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {user?.username || "N/A"}
              </p>
              <p>
                <strong>Department:</strong> {user?.department || "N/A"}
              </p>
            </div>

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
