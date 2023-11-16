import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AllNewsPage from './pages/AllNewsPage';
import ArticlePage from './pages/ArticlePage';
import PaymentsPage from './pages/PaymentsPage';
import LogoutPage from './pages/LogoutPage';
import Footer from './components/footer';

const App = () => {
    return (
        <Footer>
        <Router>
            <Routes>
                <Route path="/" element={<AllNewsPage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </Router>
        </Footer>
    );
};

export default App;