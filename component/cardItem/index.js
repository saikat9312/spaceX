import Image from 'next/image'
import styles from '../../styles/Cards.module.css'

export default function CardItem(props) {
    return (
        <div className={styles.card}>
            {/* <Image
                className={styles.img}
                src={props.itemData.links.mission_patch_small}
                alt="img"
                layout="fill"
                // width={500}
                // height={500}
            /> */}
            <img
                className={styles.img}
                src={props.itemData.links.mission_patch_small}
                alt="img"
            />
            <div className={styles.cardItemContainer}>
                <div className={styles.cardItemRow}>
                    <span className={styles.title}>{props.itemData.mission_name} #{props.itemData.flight_number}</span>
                </div>
                <div className={styles.cardItemRow}>
                    <b>Mission IDs:</b> {props.itemData.mission_id.join(', ')}
                </div>
                <div className={styles.cardItemRow}>
                    <b>Launch Year:</b> {props.itemData.launch_year}
                </div>
                <div className={styles.cardItemRow}>
                    <b>Successful Launch:</b> {props.itemData.launch_success && props.itemData.launch_success.toString()}
                </div>
                <div className={styles.cardItemRow}>
                    <b>Successful Landing:</b> {props.itemData.launch_landing}
                </div>
            </div>

        </div>
    )
}
