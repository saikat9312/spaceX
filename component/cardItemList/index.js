import CardItem from '../cardItem/index'
import styles from '../../styles/Index.module.css'

export default function CardItemList(props) {
    return (
        <div className={styles.grid}>
            {
                props.data && props.data.map((item, key) => <CardItem key={key} itemData={item} />)
            }
        </div>
    )
}
