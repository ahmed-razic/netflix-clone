import styles from './SecondaryNavigation.module.css';
import Search from '../Search';
import Notifications from '../Notifications';
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings';

function SecondaryNavigation() {
    return (
        <div className={styles.secondaryNotification}>
            <div className={styles.secondaryNavItem}>
                <Search />
            </div>
            <div className={styles.secondaryNavItem}>
                <Notifications />
            </div>
            <div className={styles.secondaryNavItem}>
                <UserMenu />
            </div>
            <div className={styles.secondaryNavItem}>
                <BillboardSettings />
            </div>
        </div>
    );
}
export default SecondaryNavigation;
