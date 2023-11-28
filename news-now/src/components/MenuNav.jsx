import { NavLink } from 'react-router-dom';
import styles from "./MenuNav.module.css"

 const MenuNav = () => {
  return (
    <div className={styles.Navbars}>
      <ul className={styles.NavbarWrappers}>
        <li className={styles.NavbarElement}>
           <NavLink className={styles.link} to="/">Home</NavLink>
        </li>
        <li className={styles.NavbarElement}>
          <NavLink className={styles.link} to="/payments">Payment plans</NavLink>
        </li>
        
        <li className={styles.NavbarElement}>
          <NavLink className={styles.link} to="">Login</NavLink>
        </li>        
      </ul>
    </div>
  );
}
export default MenuNav