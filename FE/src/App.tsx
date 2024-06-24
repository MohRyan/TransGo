import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home";
import Welcome from "./pages/auth/Welcome";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Tiket from "./pages/Tiket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/tiket" element={<Tiket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
