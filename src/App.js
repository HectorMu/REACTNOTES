import Navigation from "./components/Navigation/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
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
import PrivateRoute from "./components/Authentication/PrivateRoute";
import UserLogged from "./components/Authentication/UserLogged";
import "./lib/moment-config";

function App() {
  const userData = JSON.parse(window.localStorage.getItem("userSession"));
  const [user, setUser] = useState(userData);

  return (
    <div>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<UserLogged view={LandingPage} />} />
        <Route path="/notes/" element={<PrivateRoute view={UserNotes} />} />
        <Route path="/notes/add" element={<PrivateRoute view={AddNote} />} />
        <Route
          path="/notes/edit/:id"
          element={<PrivateRoute view={EditNote} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute view={Profile} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<UserLogged view={Login} setUser={setUser} />}
        />
        <Route path="/signup" element={<UserLogged view={SignUp} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
