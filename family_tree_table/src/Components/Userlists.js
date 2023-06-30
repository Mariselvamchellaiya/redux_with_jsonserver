import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchfamilylist } from "../Redux/Action";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Userlists = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  return props.user.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add Family [+]{" "}
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead
              // className="bg-dark text-white"
              style={{ backgroundColor: "lightblue" }}
            >
              <tr>
                <td>ID</td>
                <td>Family Name</td>
                <td>Family Member</td>
                <td>Relation</td>
                <td>TreeView</td>
              </tr>
            </thead>
            <tbody>
              {props.user.familylist &&
                props.user.familylist.map((item) => (
                  // console.log("itemid", item.id);
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.FamilyName}</td>
                    <td>{item.MemberName}</td>
                    <td>{item.Relation}</td>
                    <td>
                      <Link
                        to={"/user/treeview/" + item.id}
                        className="btn btn-primary"
                        // onClick={(e) => dispatch(handletree())}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapstoreprops = (state) => {
  return {
    user: state.user,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    loaduser: () => dispatch(fetchfamilylist()),
  };
};

export default connect(mapstoreprops, mapdispatchtoprops)(Userlists);
