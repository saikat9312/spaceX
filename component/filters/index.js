import React from 'react'
import { CONSTANT } from '../../config'
import 'antd/dist/antd.css';
import styles from '../../styles/Filters.module.css'
import { Radio } from 'antd';

export default function Filters(props) {
    const [selectedYear, setSelectedYear] = React.useState("")
    const [successfulLaunch, setSuccessfulLaunch] = React.useState("")
    const [successfulLanding, setSuccessfulLanding] = React.useState("")

    const handleYear = (e) => {
        setSelectedYear(e.target.value)
    }
    const handleLaunchSucess = (e) => {
        setSuccessfulLaunch(e.target.value)
    }
    const handleLandingSucess = (e) => {
        setSuccessfulLanding(e.target.value)
    }

    React.useEffect(() => {
        props.applyFilter(selectedYear, successfulLaunch, successfulLanding)
    }, [selectedYear, successfulLaunch, successfulLanding])

    return (
        <div className={styles.filterContainer}>
            <h4>Filters</h4>
            <div className={styles.filterItems}>
                Launch Year <hr />
                <Radio.Group buttonStyle="solid">
                    {
                        CONSTANT.LAUNCH_YEAR.map(i => (<Radio.Button className={styles.filterButton} value={i} key={i} onClick={(e) => handleYear(e)}><span style={{ color: 'black' }}>{i}</span></Radio.Button>))
                    }
                </Radio.Group>

            </div><br />
            <div className={styles.filterItems}>
                Successful Launch <hr />
                <div className={styles.filterItems}>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={true} className={styles.filterButton} onClick={(e) => handleLaunchSucess(e)}><span style={{ color: 'black' }}>True</span></Radio.Button>
                        <Radio.Button value={false} className={styles.filterButton} onClick={(e) => handleLaunchSucess(e)}><span style={{ color: 'black' }}>False</span></Radio.Button>
                    </Radio.Group>
                </div>
            </div><br />
            <div className={styles.filterItems}>
                Successful Landing <hr />
                <div className={styles.filterItems}>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={true} className={styles.filterButton} onClick={(e) => handleLandingSucess(e)}>True</Radio.Button>
                        <Radio.Button value={false} className={styles.filterButton} onClick={(e) => handleLandingSucess(e)}>False</Radio.Button>
                    </Radio.Group>
                </div>
            </div>

        </div>
    )
}
