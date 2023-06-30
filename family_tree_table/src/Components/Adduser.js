import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { functionAdduser } from "../Redux/Action";

function Adduser() {
  // const [id, setid] = useState(0);
  const [FamilyName, setfamilyname] = useState("");
  const [MemberName, setmemnername] = useState("");
  const [Relation, setrelation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { FamilyName, MemberName, Relation };
    dispatch(functionAdduser(userobj));
    navigate("/user");
    console.log(userobj);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Family</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              {/* <div className="col-lg-12">
                <div className="form-group">
                  <label>Id</label>
                  <input
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Family Name</label>
                  <input
                    value={FamilyName}
                    onChange={(e) => setfamilyname(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Member Name</label>
                  <input
                    value={MemberName}
                    onChange={(e) => {
                      setmemnername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Relation</label>
                  <input
                    value={Relation}
                    onChange={(e) => {
                      setrelation(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Adduser;
