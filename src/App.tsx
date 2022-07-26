import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import EditBill from "./pages/EditBill/EditBill";
import ClaimBill from "./pages/ClaimBill/ClaimBill";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/edit" element={<EditBill />}></Route>
          <Route path="/view" element={<ClaimBill />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
