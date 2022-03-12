import styles from './SocialLinks.module.css';
import FaceBookIcon from './FaceBookIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';
import InstagramIcon from './InstagramIcon';

function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://" className={styles.iconLink}>
                <FaceBookIcon />
            </a>
            <a href="https://" className={styles.iconLink}>
                <InstagramIcon />
            </a>
            <a href="https://" className={styles.iconLink}>
                <TwitterIcon />
            </a>
            <a href="https://" className={styles.iconLink}>
                <YoutubeIcon />
            </a>
        </div>
    );
}

export default SocialLinks;
