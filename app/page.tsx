import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ServiceModelSection } from "@/components/home/service-model";
import { ITServicesOverview } from "@/components/home/it-services-overview";
import { StaffingOverview } from "@/components/home/staffing-overview";
import { WorkingApproach } from "@/components/home/working-approach";
import { IndustriesSection } from "@/components/home/industries";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { VisionMission } from "@/components/home/vision-mission";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceModelSection />
        <ITServicesOverview />
        <StaffingOverview />
        <WorkingApproach />
        <IndustriesSection />
        <WhyChooseUs />
        <VisionMission />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
