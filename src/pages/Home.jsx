import React from 'react'
import Banner from '../components/Banner'
import Complaince from '../components/Complaince'
import data from '../data'
import { Helmet } from 'react-helmet';
import Marquee from '../components/Marquee';

function Home() {
  return (
    <>
  <Helmet>
    <title>Home-Page</title>
                     <meta name='description'  content='this is my HomePage' />
                   </Helmet>

    <Banner
    title="Helping State of Virginia with VITA Sec-530 Compliance"
    subtitle="Guiding Organizations to Meet VITA SEC-530 Cybersecurity Standards"
    description="Ensure your organization's security measures comply with VITA SEC 530 standards.
     Our expert consulting services provide tailored solutions to meet your cybersecurity requirements 
     and enhance your defense against threats."  
    />
    <Marquee />
    <Complaince items={data} />
    </>
  )
}

export default Home
