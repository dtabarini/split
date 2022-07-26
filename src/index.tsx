import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import EditBill from "./pages/EditBill/EditBill";
import ClaimBill from "./pages/ClaimBill/ClaimBill";
import AppContainer from "./components/AppContainer";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/edit" element={<EditBill />}></Route>
        <Route path="/view" element={<ClaimBill />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
