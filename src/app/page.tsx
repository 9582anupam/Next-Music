import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Hero />
            <FeaturedCourses />
            <WhyChooseUs />
            <Testimonials />
            <UpcomingWebinars />
            <Instructors />
            <Footer />
        </main>
    );
}
