import Banner from '../Components/HomeComopents/Banner'
import FeaturesSection from '../Components/HomeComopents/FeaturesSection'
import AboutSection from '../Components/HomeComopents/AboutSection'
import StatsSection from '../Components/HomeComopents/StatsSection'
import TestimonialsSection from '../Components/HomeComopents/TestimonialsSection'
import ContactSection from '../Components/HomeComopents/ContactSection'

export default function HomePageLayOuts() {
    return (
        <div>
            <Banner />

            <FeaturesSection />

            <AboutSection />

            <StatsSection />

            <TestimonialsSection />

            <ContactSection />
        </div>
    )
}
