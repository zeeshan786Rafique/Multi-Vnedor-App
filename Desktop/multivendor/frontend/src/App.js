import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignUpPage} from "./Routes.js"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
    // <div>App</div>
  );
};

export default App;
