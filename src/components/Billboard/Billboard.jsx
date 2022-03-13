import styles from './Billboard.module.css';
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';

function Billboard() {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src="./assets/billboard.webp" alt="billboard" />
            </div>
            <div className={styles.title}>
                <img src="/assets/billboard-title.webp" alt="title" />
                <div className={styles.links}>
                    <a href="">
                        <PlayIcon />
                        <span>Play</span>
                    </a>
                    <button>
                        <InfoIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Billboard;
