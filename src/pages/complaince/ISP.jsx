import React from 'react'
import Banner from '../../components/Banner'
import security from "../../assets/images/security.webp"
import VitaComplaince from '../../components/VitaComplaince'
import { Helmet } from 'react-helmet'

function ISP() {
  return (
    <>
    <Helmet>
        <title>Vita-Complaince</title>
        <meta name='description' content='Information Sercurity Policy' />
    </Helmet>
    <Banner 
    title="Information Security Policy"
    description="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2,
     our Security Policy Management as a Service clearly defines the essential governance roles and 
     accountabilities that support a robust security posture:"
     />

     <div className='flex flex-col lg:block'>

         <div className='lg:float-right m-3 w-80 h-64 mr-20 mt-10'>
            <img src={security} alt='security'  />
        </div>

         <div className='flex-col' >

           <VitaComplaince

           heading1="Information Security Policy"
           p1="This section establishes a base standard for information security and risk management across the agency.
            Drawing from NIST SP 800-53 Rev. 5, it defines baseline expectations for protecting confidentiality, integrity,
            and availability. Agencies must meet or exceed these baselines and may then tailor and document controls to suit 
            their environment and sensitivity of their systems and data.
            “Agencies are required to develop, document, and enforce an information security program 
             that aligns with SEC530 Information Security Standard. Exceptions may only be granted with proper
             justification, mitigation, and approval.”"

           heading2="Information Security Program Objectives"
           p2="Key objectives include defining clear roles and responsibilities, establishing and maintaining the security program, 
           managing exceptions appropriately, and identifying exemptions where applicable."

           li1="Define Roles & Responsibilities"
           li2="Establish and Enforce the Security Program"
           li3="Manage Exceptions and Document Mitigations"

           heading3="Access Control Policy"
           p3="Agencies must document and implement access control procedures. This includes account management, timely disabling of unused accounts, audits, and monitoring.
            Shared accounts are prohibited, and privileged access must be restricted and documented."
           />

        </div>

       

     </div>
      
    </>
  )
}

export default ISP
