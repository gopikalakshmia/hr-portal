export default function Employee({}) {
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
    return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5>Welcome User !!!</h5>
        <h5 className="card-title">{loggedInUser.fullName}</h5>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
}
