import { useRef, useState } from "react";
import DetailsModal from "./DetailsModal";
import LeaveModal from "./LeaveModal";

export default function Employee() {
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const leave = useRef();

  const handleDetails = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleLeave = () => {
    const leaveVal = leave.current.value;
    if (leaveVal === "") {
      setError(true);
      return;
    }
    setError(false);
    if (!error) {
      const existingLeave =
        JSON.parse(localStorage.getItem("LeaveDetails")) || [];
      const newLeave = {
        id: random(1, 20),
        email: loggedInUser.username,
        leave: leaveVal,
        status:"Not Approved"
      };
      const fullLeaveList = [...existingLeave, newLeave];
      console.log("existingLeave", fullLeaveList);
      localStorage.setItem("LeaveDetails", JSON.stringify(fullLeaveList));
      //localStorage.setItem("LeaveDetails", JSON.stringify([...existingLeave,{id:random(1,20),email:loggedInUser.username,leave:leaveVal}]));
      leave.current.value = "";
      alert("Leave applied sucessfully!!!");
      
    }
  };
  return (
    <div className="row">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5>Welcome User !!!</h5>
          <h5 className="card-title">{loggedInUser.fullName}</h5>
          <button className="btn btn-primary" onClick={handleDetails}>
            View Details
          </button>
          <DetailsModal
            user={loggedInUser}
            isOpen={isOpen}
            onClose={handleClose}
          />
        </div>
      </div>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <h5>Apply for leave</h5>
        <h4 className="card-title">Reason for Leave</h4>
        <textarea ref={leave} required />
        <div>{error && <p className="text-danger">Reason of leave cannot be blank</p>}</div>
        <button className="btn btn-primary" onClick={handleLeave}>
          Apply Leave
        </button>
      </div>
        <div className="card mb-3" style={{ width: "18rem" }}>
        <h5>{loggedInUser.fullName} View Leave Details</h5>

        <button className="btn btn-primary" onClick={handleLeave}>
          View Leave Status
        </button>
        <LeaveModal
            user={loggedInUser}
            isOpen={isOpen}
            onClose={handleClose}
          />
      </div>
    </div>
  );
}
