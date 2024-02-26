import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./pages/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Blogdetails from "./pages/Blogdetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/blog/:id" element={<Blogdetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
