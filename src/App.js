import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/common/About";
import UserNotes from "./pages/common/UserNotes";
import NotFound from "./pages/status/NotFound";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import AddNote from "./pages/common/AddNote";
import EditNote from "./pages/common/EditNote";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

document.title = "Node Notes";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes/" element={<UserNotes />} />
        <Route path="/notes/add" element={<AddNote />} />
        <Route path="/notes/edit/:id" element={<EditNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
