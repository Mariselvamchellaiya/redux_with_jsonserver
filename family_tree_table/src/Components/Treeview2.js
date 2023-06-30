import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchfamilylist } from "../Redux/Action";
import * as ReactDOM from "react-dom";
import { TreeView } from "@progress/kendo-react-treeview";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Components/treeview.css";
import { useSelector } from "react-redux";

function Treeview2(props) {
  // const tree = props;
  // console.log("prps", props);
  // const [data, setData] = useState([]);
  const statedata = useSelector((state) => state.user.familylist);
  let { id } = useParams();

  useEffect(() => {
    props?.loaduser();
    // axios.get("http://localhost:8000/Families/" + id).then((res) => {
    //   setData(res.data);
    // });
  }, []);

  // console.log("data", data);

  return (
    <div>
      {statedata.length > 0
        ? statedata.map((fnames) => {
            return (
              <div>
                {fnames.id == id ? (
                  <div>
                    <ul>
                      <li>
                        <details>
                          <summary>
                            {fnames.id == id ? fnames.FamilyName : ""}
                          </summary>
                          <ul>
                            <li>
                              <details>
                                <summary>
                                  {fnames.id == id ? fnames.MemberName : ""}
                                </summary>
                                <ul>
                                  <li>
                                    <details>
                                      <summary>
                                        {" "}
                                        {fnames.id == id ? fnames.Relation : ""}
                                      </summary>
                                    </details>
                                  </li>
                                </ul>
                              </details>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
}

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

export default connect(mapstoreprops, mapdispatchtoprops)(Treeview2);
