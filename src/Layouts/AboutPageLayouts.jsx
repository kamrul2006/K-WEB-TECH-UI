import AboutUsHeading from "../Components/AboutPageComponents/AboutHeading"
import CallToActionSection from "../Components/AboutPageComponents/CallToActionSectionAbout"
import MissionVision from "../Components/AboutPageComponents/MissionVision"
import AboutSection from "../Components/HomeComopents/AboutSection"
import CTASection from "../Components/HomeComopents/CTASection"

function AboutPageLayOuts() {

    return (
        <div>

            <AboutUsHeading />

            <AboutSection />

            {/* -------- */}
            <CTASection />

            <MissionVision />

            <CallToActionSection />


        </div>
    )
}

export default AboutPageLayOuts
