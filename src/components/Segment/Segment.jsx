import styles from './Segment.module.css';
import placeholderImg from './thumbnail-top10-h.jpg';
import RightSlider from './RightSlider';

function Segment({ segment }) {
    return (
        <div className={styles.segment}>
            <p className={styles.title}>{segment}</p>
            <div className={styles.row}>
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
            </div>
            <button className={styles.button}>
                <RightSlider />
            </button>
        </div>
    );
}
export default Segment;
