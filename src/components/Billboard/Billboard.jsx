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
                <img src="/assets/title.png" alt="title" />
                <div className={styles.description}>
                    Netflix, Inc. is an American subscription streaming service and production company. Launched on
                    August 29, 1997, it offers a library of films and television series through distribution deals as
                    well as its own productions, known as Netflix Originals.
                </div>
                <div className={styles.links}>
                    <a href="/">
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
