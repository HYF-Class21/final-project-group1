import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStateProvider } from "./context/GlobalStateContext";

//HEAD
import "./App.css";
import AllNewsPage from "./pages/AllNewsPage";
import ArticlePage from "./pages/ArticlePage";
import PaymentsPage from "./pages/PaymentsPage";
import LogoutPage from "./pages/LogoutPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AllNewsPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalStateProvider>
  );
};
export default App;




