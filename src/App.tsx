import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components";

export const App = () => {
 return (
  <Router>
   <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
   <Routes>
    <Route path="/" element={<Layout />}></Route>
   </Routes>
  </Router>
 );
};
