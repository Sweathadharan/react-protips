
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import MyForm from "./components/Form"; 
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "black",
            padding: "5px 0 5px 5px",
            fontSize: "18px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Kalvium ❤
            </NavLink>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Contact
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/Form"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Form
              </NavLink>
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Form" element={<MyForm />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
