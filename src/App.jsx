import react from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";



function App() {


  // useLocation: A React Router hook that gives access to the current route's path (e.g., /DESTINATION or /CREW). This will help us determine which page is active.
  const location = useLocation();

  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/DESTINATION":
        return "bg-destination bg-cover bg-center";
      case "/CREW":
        return "bg-crew bg-cover bg-center";
      case "/TECHNOLOGY":
        return "bg-technology bg-cover bg-center";
      default:
        return "bg-home bg-cover bg-center";
    }
  };

  
  return (
    // ${getBackgroundClass()}: Dynamically adds the appropriate background class based on the current route.
    <div className={`min-h-screen ${getBackgroundClass()}`}>
      <Navbar />

      {/* Route and Routes: Used to define the different routes (pages) in the app. */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DESTINATION" element={<Destination/>}/>
        <Route path="/CREW" element={<Crew/>}/>
        <Route path="/TECHNOLOGY" element={<Technology/>}/> 
      </Routes>
    </div>
  );
}

export default App;
