import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components";
import { Main } from "./routes/Main";
import "./theme/style/form.css";

export const App = () => {
 return (
  <Router>
   <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<Main />} />
    </Route>
   </Routes>
  </Router>
 );
};
