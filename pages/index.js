import React from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import dynamic from 'next/dynamic'
import Layout from '../component/layout/index'
import Filters from '../component/filters/index'
import axios from 'axios'
import styles from '../styles/Index.module.css'
import { CONSTANT } from '../config'

const DynamicComponent = dynamic(() => import('../component/cardItemList/index'))

export default function Home(props) {
  if (props.errorCode) {
    return <Error statusCode={props.errorCode} title="Please check your internet"/>
  }
  const [isSSR, setIsSSR] = React.useState(true)
  const [resData, setResData] = React.useState([])

  const router = useRouter()

  const applyFilter = async (selectedYear, successfulLaunch, successfulLanding) => {
    // Shallow routing
    router.push(`/?limit=100&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${selectedYear}`, undefined, { shalow: true })

    const { data, error } = await axios.get(`${CONSTANT.BASE_URL}?&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${selectedYear}`)
    //console.log("error", error);
    setResData(data)
    setIsSSR(false)
  }

  return (
    <Layout>
      <div className={styles.mainContent}>

        <div className={styles.sidenavFilter}>
          <Filters applyFilter={applyFilter} />
        </div>

        {
          isSSR ? (<DynamicComponent data={props.data} />)
            : (resData.length ? <DynamicComponent data={resData} /> : <div style={{ fontSize: 30, alignItems: 'center', marginLeft: '30%', color: '#8d8da7' }}>No data found</div>)
        }

      </div>

    </Layout>
  )
}

//This gets called at build time
export async function getStaticProps() {
  const { data, errorCode } = await axios.get(CONSTANT.BASE_URL)
  console.log("data", data);
  console.log("errorCode", errorCode);
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data, errorCode: errorCode.code },
    revalidate: 1
  } // will be passed to the page component as props
}