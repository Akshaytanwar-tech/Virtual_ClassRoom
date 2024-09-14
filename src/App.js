import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ClassList from "./components/ClassList";
import ClassDetail from "./components/ClassDetail";
import SessionList from "./components/SessionList";
import CommentSection from "./components/CommentSection";
import EnrollmentForm from "./components/EnrollmentForm";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/classes" exact element={<ClassList />} />
        <Route path="/classes/:id" exact element={<ClassDetail />} />
        <Route path="/sessions/:id" exact element={<SessionList />} />
        <Route path="/lectures/:id" exact element={<CommentSection />} />
        <Route path="/profile" exact element={<UserProfile />} />
        <Route path="/enroll" exact element={<EnrollmentForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
