import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/common/About";
import UserNotes from "./pages/common/UserNotes";
import NotFound from "./pages/status/NotFound";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import AddNote from "./pages/common/AddNote";
import EditNote from "./pages/common/EditNote";
import Profile from "./pages/common/Profile";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { useState } from "react/cjs/react.development";

document.title = "Node Notes";

function App() {
  const userData = JSON.parse(window.localStorage.getItem("userSession"));
  const [user, setUser] = useState(userData);

  return (
    <div>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/notes/"
          element={
            user === null ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <UserNotes />
            )
          }
        />
        <Route
          path="/notes/add"
          element={
            user === null ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <AddNote />
            )
          }
        />
        <Route
          path="/notes/edit/:id"
          element={
            user === null ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <EditNote />
            )
          }
        />
        <Route
          path="/profile"
          element={
            user === null ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <Profile />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            user !== null ? (
              <Navigate to="/notes" replace={true} />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            user !== null ? <Navigate to="/notes" replace={true} /> : <SignUp />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
