import Banner from '../Components/HomeComopents/Banner'
import FeaturesSection from '../Components/HomeComopents/FeaturesSection'
import AboutSection from '../Components/HomeComopents/AboutSection'
import StatsSection from '../Components/HomeComopents/StatsSection'
import TestimonialsSection from '../Components/HomeComopents/TestimonialsSection'
import ContactSection from '../Components/HomeComopents/ContactSection'
import TechStackSection from '../Components/HomeComopents/TechStackSection'
import CTASection from '../Components/HomeComopents/CTASection'
import CTASectionAbout from '../Components/HomeComopents/CTASectionAbout'
import CTASectionProjects from '../Components/HomeComopents/CTASectionProjects'

export default function HomePageLayOuts() {
    return (
        <div>
            <Banner />

            <FeaturesSection />

            {/* ----------- */}
            <CTASection />

            <TechStackSection />

            {/* ------- */}
            <CTASectionProjects />

            <AboutSection />

            {/* ---------- */}
            <CTASectionAbout />

            <StatsSection />

            <TestimonialsSection />

            <ContactSection />
        </div>
    )
}
