import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Appointments1 from "./pages/Appointments1";
import Appointments from "./pages/Appointments";
import Registration from "./pages/Registration";
import Patients from "./pages/Patients";
import Profile from "./pages/UserProfile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/appointments":
        title = "";
        metaDescription = "";
        break;
      case "/appointments1":
        title = "";
        metaDescription = "";
        break;
      case "/registration":
        title = "";
        metaDescription = "";
        break;
      case "/patients":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments1 />} />
      <Route path="/appointments1" element={<Appointments />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
