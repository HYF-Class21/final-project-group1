import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useGlobalState } from "./context/GlobalStateContext";

import "./App.css";
import AllNewsPage from "./pages/AllNewsPage";
import ArticlePage from "./pages/ArticlePage";
import PaymentsPage from "./pages/PaymentsPage";
import LogoutPage from "./pages/LogoutPage";

const App = () => {
  const { globArticles } = useGlobalState({});

  return (
    <GlobalStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AllNewsPage />} />
          {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
          {globArticles.map((article) => (
            <Route
              key={article.id}
              path={`/article/${article.id}`}
              element={<ArticlePage key={article.id} article={article} />}
            />
          ))}
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
