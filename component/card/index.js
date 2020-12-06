import styles from '../../styles/Cards.module.css'

export default function Card(props) {
    return (
        <div className={styles.card}>
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
                    Mission IDs: {props.itemData.mission_id.join(', ')}
                </div>
                <div className={styles.cardItemRow}> 
                    Launch Year: {props.itemData.launch_year}
                </div>
                <div className={styles.cardItemRow}>
                    Successful Launch: {props.itemData.launch_success && props.itemData.launch_success.toString()}
                </div>
                <div className={styles.cardItemRow}> 
                    Successful Landing: {props.itemData.launch_landing}
                </div>
            </div>

        </div>
    )
}
