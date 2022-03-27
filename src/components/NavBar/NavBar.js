import styles from './NavBar.module.scss'
import clsx from 'clsx';

const NavBar = () => {
    return (
        <div className={styles.navigation}>
            <a href="/" className={clsx(styles.icon, styles.link)}><i class="fa fa-tasks"></i></a>
            <ul className={styles.list}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="/" className={styles.link}>Favorite</a></li>
                <li><a href="/" className={styles.link}>About</a></li>
            </ul>
        </div>
    );
}

export default NavBar;