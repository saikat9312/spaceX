import Image from 'next/image'
import styles from '../../styles/Cards.module.css'

export default function CardItem(props) {
    return (
        <div className={styles.card}>
                <img
                    className={styles.img}
                    src={props.itemData.links.mission_patch_small}
                    alt="img"
                />
                <div className={styles.cardItemRow}>
                    <span className={styles.title}>{props.itemData.mission_name} #{props.itemData.flight_number}</span>
                </div>
                <div className={styles.cardItemRow}>
                    <b>Mission IDs:</b>
                    {
                        props.itemData.mission_id.length ? (<ul>
                            {props.itemData.mission_id.map((id) => {
                                return <li key={id}>{id}</li>
                            })}
                        </ul>) : " NA"
                    }
                </div>
                <div className={styles.cardItemRow}>
                    <b>Launch Year:</b> {props.itemData.launch_year}
                </div>
                <div className={styles.cardItemRow}>
                    <b>Successful Launch:</b> {props.itemData.launch_success ? 'true' : 'false'}
                </div>
                <div className={styles.cardItemRow}>
                    <b>Successful Landing:</b> {props.itemData.rocket && props.itemData.rocket.first_stage.cores && Array.isArray(props.itemData.rocket.first_stage.cores) && typeof (props.itemData.rocket.first_stage.cores[0].land_success) === 'boolean' ? props.itemData.rocket.first_stage.cores[0].land_success.toString() : 'NA'}
                </div>
            {/* </div> */}

        </div>
    )
}
