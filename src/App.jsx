import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Propertypage from "./pages/PropertyPage";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/properties" element={<Propertypage/>}></Route>
        
      </Routes>
      <Footer />

      
    </>
  );
}

export default App;
