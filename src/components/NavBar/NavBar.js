import styles from './NavBar.module.scss'
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.navigation}>
            <Link to="/" className={clsx(styles.icon)}><i class="fa fa-tasks"></i></Link>
            <ul className={clsx(styles.list, styles.link)}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">
                        Favorite
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;