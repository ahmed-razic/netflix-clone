import styles from './Navigation.module.css';
import SecondaryNavigation from '../SecondaryNavigation';

function Navigation() {
    const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];
    return (
        <div className={styles.navigation}>
            <div className={styles.mainNav}>
                <img className={styles.navLogo} src="./assets/logo.png" alt="logo" />
                <ul className={styles.navItems}>
                    {navItems.map(item => (
                        <li className={styles.navItem} key={item}>
                            <a href="/">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNavigation />
        </div>
    );
}
export default Navigation;
