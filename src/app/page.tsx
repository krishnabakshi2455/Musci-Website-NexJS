import FeaturedCourses from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WHyChooseUs from "@/components/WHyChooseUs";



export default function Home() {
  return (
   <>
   <main className=" min-h-screen bg-black/[8.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WHyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructor/>
   </main>
   
   </>
  );
}
