import React from 'react'
import PriceForm from "../components/PriceForm"
import Banner from '../components/Banner'
import PlanDetails from '../components/PlanDetails'
import { Helmet } from 'react-helmet';

function Standard() {
  return (
  <>

 <Helmet>
   <title>StandardPrice-page</title>
                    <meta name='description'  content='this is my Standard Pricing Plan page' />
                  </Helmet>

   <Banner
    title="Ongoing Support for VITA SEC-530 Compliance"
    description="Our Standard Service is ideal for organizations that require regular guidance and 
    proactive measures to remain compliant with VITA SEC-530 requirements, ensuring continuous cybersecurity readiness."
    />

    <div className='pt-28 px-4 lg:px-20 py-20 grid grid-cols-2 gap-6'>

         <PlanDetails
       main="What’s Included in the Standard Service?"
       sub1="Weekly Compliance Sessions"
       p1="Our VITA SEC-530 compliance consultant
        will meet with your team four times a month to review progress, address challenges, and guide you toward compliance."
        sub2="Detailed Compliance Roadmaps"
        p2="Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks."
        sub3="Artifact and Documentation Support"
        p3="We'll work with you to maintain detailed, audit-ready documentation to demonstrate compliance."
        sub4="How You Benefit:" l1="Stay on top of compliance with regular, dedicated support." 
        l2="Minimize risk with improved IT and OT security controls." l3="Build a strong cybersecurity framework for audits and beyond."
          />

        <div className='lg:col-span-1 col-span-2'>
             <PriceForm title="Take control of your VITA SEC-530 compliance journey with regular, proactive support." />
        </div>
    </div>
    </>
  )
}

export default Standard
