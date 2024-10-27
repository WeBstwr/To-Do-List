import "./assets/globals.css";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edited from "./pages/Edited/Edited";
import Preview from "./pages/Preview/Preview";
import Profile from "./pages/Profile/Profile";
import Menu from "./components/Menu/Menu";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edited" element={<Edited />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
        <Menu />
      </BrowserRouter>
    </>
  );
}

export default App;
