import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Userlists from "./Components/Userlists";
import Adduser from "./Components/Adduser";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Treeview2 from "./Components/Treeview2";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/user"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Userlists />} />
            <Route path="/user/add" element={<Adduser />} />
            <Route path="user/treeview/:id" element={<Treeview2 />} />
          </Routes>
        </Router>
        <ToastContainer></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
