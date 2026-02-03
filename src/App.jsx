import {Routes, Route, useLocation} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Propertypage from "./pages/PropertyPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GoogleSuccess from "./pages/GoogleSuccess";
import UserDashboard from "./pages/UserDashboard";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  const location = useLocation();

  // admin page header or footer hide
  const hideHeaderandFooter = [
    "/admin-login",
    "/admin-register",
    "/admin-dashboard"
  ].includes(location.pathname);

  return (
    <>

      {!hideHeaderandFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/properties" element={<Propertypage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/google-success" element={<GoogleSuccess/>}></Route>
        <Route path="/dashboard" element={<UserDashboard/>}></Route>


        {/* admin  */}
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/admin-register" element={<AdminRegister/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
      </Routes>
      {!hideHeaderandFooter && <Footer />}

      
    </>
  );
}

export default App;
