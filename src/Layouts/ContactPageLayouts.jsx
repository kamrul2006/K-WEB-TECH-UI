import React from 'react'
import ContactUsHeading from '../Components/ContactPageComponents/ContactHeading'
import ContactInfoBlock from '../Components/ContactPageComponents/ContactInfoBlock'
import CTASectionAbout from '../Components/HomeComopents/CTASectionAbout'
import ContactSection from '../Components/HomeComopents/ContactSection'
import CallToActionSection from '../Components/AboutPageComponents/CallToActionSectionAbout'

export default function ContactPageLayouts() {
    return (
        <div>

            <ContactUsHeading />

            <ContactInfoBlock />

            {/* --------- */}
            <CTASectionAbout />

            <ContactSection />

            {/* ------ */}
            <CallToActionSection />

        </div>
    )
}
