import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import styles from './LogoutPage.module.css';
import { useGlobalState } from "../context/GlobalStateContext";
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { isPayed, setIsPayed } = useGlobalState();

  const handleLogout = async () => {
    Cookies.set('isLoggedIn', false);
    Cookies.remove("count");
    setIsPayed(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.logoutContainer}>    
          <div className={styles.logout}>
            <h1>Are you sure that you want to log out?</h1>
            <p>You will not be able to read the articles.</p>
            <h2>If yes, click the button below.</h2>
            <button onClick={handleLogout}>Logout</button>
            <FontAwesomeIcon icon={faDoorOpen} style={{color: "black", fontSize: "200px", marginTop: "60px"}} />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default LogoutPage