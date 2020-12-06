import React from 'react'
import { CONSTANT } from '../../config'
import styles from '../../styles/Filters.module.css'

export default function Filters(props) {
    const [selectedYear, setSelectedYear] = React.useState("")
    const [successfulLaunch, setSuccessfulLaunch] = React.useState("")
    const [successfulLanding, setSuccessfulLanding] = React.useState("")

    const handleYear = (e) => {
        setSelectedYear(e.target.innerText)
    }
    const handleLaunchSucess = (e) => {
        setSuccessfulLaunch(e.target.innerText)
    }
    const handleLandingSucess = (e) => {
        setSuccessfulLanding(e.target.innerText)
    }

    React.useEffect(() => {
        props.applyFilter(selectedYear, successfulLaunch, successfulLanding)
    }, [selectedYear, successfulLaunch, successfulLanding])

    return (
        <div className={styles.filterContainer}>
            <h4>Filters</h4>
            <div className={styles.filterItems}>
                Launch Year <hr />
                {
                    CONSTANT.LAUNCH_YEAR.map(i => (<button className={styles.filterButton} key={i} onClick={(e) => handleYear(e)}>{i}</button>))
                }
            </div><br />
            <div className={styles.filterItems}>
                Successful Launch <hr />
                <div className={styles.filterItems}>
                    <button className={styles.filterButton} onClick={(e) => handleLaunchSucess(e)}>True</button>
                    <button className={styles.filterButton} onClick={(e) => handleLaunchSucess(e)}>False</button>
                </div>
            </div><br />
            <div className={styles.filterItems}>
                Successful Landing <hr />
                <div className={styles.filterItems}>
                    <button className={styles.filterButton} onClick={(e) => handleLandingSucess(e)}>True</button>
                    <button className={styles.filterButton} onClick={(e) => handleLandingSucess(e)}>False</button>
                </div>
            </div>

        </div>
    )
}
