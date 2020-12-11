import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../component/layout/index'
//import CardItemList from '../component/cardItemList/index'
import Filters from '../component/filters/index'
import axios from 'axios'
import styles from '../styles/Index.module.css'
import { CONSTANT } from '../config'

const DynamicComponent = dynamic(() => import('../component/cardItemList/index'))

export default function Home(props) {
  const [isSSR, setIsSSR] = React.useState(true)
  const [resData, setResData] = React.useState([])
  const [selectedYear, setSelectedYear] = React.useState("")
  const [successfulLaunch, setSuccessfulLaunch] = React.useState("")
  const [successfulLanding, setSuccessfulLanding] = React.useState("")

  const router = useRouter()

  React.useEffect(async () => {
    // Shallow routing
    router.push(`/?limit=100&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${selectedYear}`, undefined, { shalow: true })

    const { data } = await axios.get(`${CONSTANT.BASE_URL}?&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${selectedYear}`)

    setResData(data)
    setIsSSR(false)

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

        {
          isSSR ? (<DynamicComponent data={props.data} />) : (resData.length ? <DynamicComponent data={resData} /> : <div style={{ fontSize: 30, alignItems: 'center', marginLeft: '30%', color: '#8d8da7' }}>No data found</div>)
        }

      </div>

    </Layout>
  )
}

//This gets called at build time
export async function getStaticProps() {
  const { data } = await axios.get(CONSTANT.BASE_URL)
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
    revalidate: 1
  } // will be passed to the page component as props
}