import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "./pages/common/About";
import UserNotes from "./pages/common/UserNotes";
import NotFound from "./pages/status/NotFound";
import LandingPage from "./pages/LandingPage";

document.title = "REACT API NOTES";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<UserNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
