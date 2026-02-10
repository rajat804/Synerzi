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
import ShowListings from "./pages/ShowListings";
import AdminEditProperty from "./pages/AdminEditProperty";
import AddListing from "./pages/AddListing";
import PropertyDetails from "./pages/PropertyDetails";
import SearchResults from "./pages/SearchResults";
import FloatingContact from "./components/FloatingContact";
import CategoryProperties from "./pages/CategoryProperties";
import Blogs from "./pages/Blogs";


function App() {
  const location = useLocation();

  // admin page header or footer hide
  const adminRoutes = [
  "/admin-login",
  "/admin-register",
  "/admin-dashboard",
  "/admin-listings",
  "/admin/add-listing",
];
const hideHeaderandFooter =
  adminRoutes.includes(location.pathname) ||
  location.pathname.startsWith("/admin-edit-property");
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
        <Route path="/property/:id" element={<PropertyDetails/>}></Route>
        <Route path="/search" element={<SearchResults/>}></Route>
        <Route path="/category/:category" element={<CategoryProperties/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        {/* admin  */}
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/admin-register" element={<AdminRegister/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin/add-listing" element={<AddListing/>}></Route>
        <Route path="/admin-listings" element={<ShowListings/>}></Route>
        <Route path="/admin-edit-property/:id" element={<AdminEditProperty/>}></Route>
      </Routes>
      <FloatingContact/>
      {!hideHeaderandFooter && <Footer />}
    </>
  );
}

export default App;
