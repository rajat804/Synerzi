import {Routes, Route} from "react-router-dom";
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

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/properties" element={<Propertypage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/google-success" element={<GoogleSuccess/>}></Route>
        <Route path="/dashboard" element={<UserDashboard/>}></Route>
      </Routes>
      <Footer />

      
    </>
  );
}

export default App;
