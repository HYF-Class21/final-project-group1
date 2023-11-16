import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalStateContext";

import "./App.css";
import AllNewsPage from "./pages/AllNewsPage";
import ArticlePage from "./pages/ArticlePage";
import PaymentsPage from "./pages/PaymentsPage";
import LogoutPage from "./pages/LogoutPage";

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
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
