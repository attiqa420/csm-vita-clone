import React from 'react'
import PriceForm from "../components/PriceForm"
import Banner from '../components/Banner'
import PlanDetails from '../components/PlanDetails'
import { Helmet } from 'react-helmet';

function Basic() {
  return (
    <>
      <Helmet>
        <title>BasicPrice-Page</title>
                    <meta name='description'  content='this is my Basic Pricing page' />
                  </Helmet>
    <Banner
    title="Get Started on Your VITA SEC-530 Compliance"
    description="At SPS, we help organizations in Virginia meet cybersecurity standards outlined in VITA SEC-530. 
    Our Basic Service is designed to provide the foundation for establishing compliance and strengthening security practices."
    />

    <div className='pt-28  px-4 lg:px-20 py-20 grid grid-cols-2 gap-6'>
         <PlanDetails
       main="What’s Included in the Basic Service?"
       sub1="Monthly VITA SEC-530 Compliance Assessment."

        sub2="Detailed Compliance Roadmaps"   p2="Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks."

        sub3="Artifact and Documentation Support"   p3="We'll work with you to maintain detailed, audit-ready documentation to 
        demonstrate compliance."

        sub4="How You Benefit:" l1="Stay on top of compliance with regular, dedicated support." 
        l2="Minimize risk with improved IT and OT security controls." l3="Build a strong cybersecurity framework for audits and beyond."
          />

        <div className='lg:col-span-1 col-span-2'>
               <PriceForm title="Take the first step toward VITA SEC-530 compliance today." />
        </div>
    </div>
    </>
  )
}

export default Basic
