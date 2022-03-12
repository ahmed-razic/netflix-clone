import styles from './Notifications.module.css';
import BellIcon from './BellIcon';

function Notifications() {
    return (
        <div className={styles.notifications}>
            <BellIcon />
        </div>
    );
}
export default Notifications;
