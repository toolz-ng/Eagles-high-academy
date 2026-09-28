import AboutPreview from "./components/home/AboutPreview";
import AcademicExcellence from "./components/home/academics/AcademicExcellence";
import AnnouncementMarquee from "./components/home/Announcement";
import CampusShowcase from "./components/home/campus/CampusShowcase";
import CTASection from "./components/home/CTASection";
import FAQ from "./components/home/faq/FAQ";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import StudentLife from "./components/home/student-life/StudentLife";
import Testimonials from "./components/home/testimonials/Testimonials";
import WhyChooseUs from "./components/home/WhyCHooseUs";

export default function Home() {
  return(
    <div>
      <Hero />
      <AnnouncementMarquee />
      <Stats />
      <AboutPreview />
      <WhyChooseUs />
      <CampusShowcase />
      <AcademicExcellence />
      <Testimonials />
      <StudentLife />
      <CTASection />
      <FAQ />
    </div>
  )
}