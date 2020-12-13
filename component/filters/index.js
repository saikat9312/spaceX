import React from 'react'
import { CONSTANT } from '../../config'
import 'antd/dist/antd.css';
import styles from '../../styles/Filters.module.css'

export default function Filters(props) {
    const [selectedYear, setSelectedYear] = React.useState("")
    const [successfulLaunch, setSuccessfulLaunch] = React.useState("")
    const [successfulLanding, setSuccessfulLanding] = React.useState("")

    React.useEffect(() => {
        localStorage.getItem("selectedYear") && setSelectedYear(localStorage.getItem("selectedYear"))
        localStorage.getItem("successfulLaunch") && setSuccessfulLaunch(localStorage.getItem("successfulLaunch"))
        localStorage.getItem("successfulLanding") && setSuccessfulLanding(localStorage.getItem("successfulLanding"))
    }, [])

    React.useEffect(() => {
        if (selectedYear !== "" || successfulLaunch !== "" || successfulLanding !== "") {
            props.applyFilter(selectedYear, successfulLaunch, successfulLanding)
        }
    }, [selectedYear, successfulLaunch, successfulLanding])

    const handleYear = (e) => {
        localStorage.setItem("selectedYear", e.target.innerText)
        setSelectedYear(e.target.innerText)
    }
    const handleLaunchSucess = (e) => {
        localStorage.setItem("successfulLaunch", e.target.innerText.toLowerCase())
        setSuccessfulLaunch(e.target.innerText.toLowerCase())
    }
    const handleLandingSucess = (e) => {
        localStorage.setItem("successfulLanding", e.target.innerText.toLowerCase())
        setSuccessfulLanding(e.target.innerText.toLowerCase())
    }
    const resetFilters = async () => {
        localStorage.clear()
        setSelectedYear("")
        setSuccessfulLaunch("")
        setSuccessfulLanding("")
        props.applyFilter("", "", "")
    }

    return (
        <div className={styles.filterContainer}>

            <div className={styles.filterTitleRow}>
                <h3>Filters</h3>
                <button className={styles.resetButton} onClick={resetFilters}>Reset</button>
            </div>

            <div className={styles.filterItems} >
                <div className={styles.filterTitle}>Launch Year</div>
                {
                    CONSTANT.LAUNCH_YEAR.map(i => (<button className={styles.filterButton} style={{ background: i == parseInt(selectedYear) ? '#38a02c' : '#b4ffa2' }} key={i} onClick={(e) => handleYear(e)}>{i}</button>))
                }
            </div>
            <div className={styles.filterItems}>
                <div className={styles.filterTitle}>Successful Launch</div>
                <div className={styles.filterItems}>
                    <button className={styles.filterButton} style={{ background: successfulLaunch == "true" ? '#38a02c' : '#b4ffa2' }} onClick={(e) => handleLaunchSucess(e)}>True</button>
                    <button className={styles.filterButton} style={{ background: successfulLaunch == "false" ? '#38a02c' : '#b4ffa2' }} onClick={(e) => handleLaunchSucess(e)}>False</button>
                </div>
            </div>
            <div className={styles.filterItems}>
                <div className={styles.filterTitle}>Successful Landing</div>
                <div className={styles.filterItems}>
                    <button className={styles.filterButton} style={{ background: successfulLanding == "true" ? '#38a02c' : '#b4ffa2' }} onClick={(e) => handleLandingSucess(e)}>True</button>
                    <button className={styles.filterButton} style={{ background: successfulLanding == "false" ? '#38a02c' : '#b4ffa2' }} onClick={(e) => handleLandingSucess(e)}>False</button>
                </div>
            </div>
        </div>
    )
}