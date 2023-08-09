import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Post from "./Post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/post" element={<Post/>} />


        
      </Routes>
    </BrowserRouter>
  );
}     

export default App;
