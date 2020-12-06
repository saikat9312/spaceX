import React from 'react'
import Layout from '../component/layout/index'
import Card from '../component/card/index'
import Filters from '../component/filters/index'
import axios from 'axios'
import styles from '../styles/Index.module.css'
import { CONSTANT } from '../config'

export default function Home(props) {

  const [resData, setResData] = React.useState([])
  const [selectedYear, setSelectedYear] = React.useState("")
  const [successfulLaunch, setSuccessfulLaunch] = React.useState("")
  const [successfulLanding, setSuccessfulLanding] = React.useState("")

  React.useEffect(() => {
    setResData(props.data)
  }, [props.data])

  React.useEffect(async () => {
    const { data } = await axios.get(`${CONSTANT.BASE_URL}?&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${selectedYear}`)
    setResData(data)

  }, [selectedYear, successfulLaunch, successfulLanding])


  const applyFilter = (selectedYear, successfulLaunch, successfulLanding) => {
    setSelectedYear(selectedYear)
    setSuccessfulLaunch(successfulLaunch)
    setSuccessfulLanding(successfulLanding)
  }

  return (
    <Layout>
      <div className={styles.mainContent}> 

        <div className={styles.sidenavFilter}>
          <Filters applyFilter={applyFilter} />
        </div>

        <div className={styles.grid}>
          {
            resData && resData.map(item => <Card key={item.flight_number} itemData={item} />)
          }
        </div>

      </div>

    </Layout>
  )
}

export async function getStaticProps(context) {
  const { data } = await axios.get(CONSTANT.BASE_URL)
  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: { data } } // will be passed to the page component as props
}