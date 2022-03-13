import styles from './Titles.module.css';
import Segment from '../Segment/Segment';

function Titles() {
    return (
        <div className={styles.titles}>
            <Segment title="Popular on Netflix" />
            <Segment title="Continue watcing" />
            <Segment title="Trending Now" />
            <Segment title="Watch it again" />
        </div>
    );
}
export default Titles;
