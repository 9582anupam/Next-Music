import Hero from "./pages/home/Hero";
import FeaturedCourses from "./pages/home/FeaturedCourses";
import WhyChooseUs from "./pages/home/WhyChooseUs";
import Testimonials from "./pages/home/Testimonials";
import UpcomingWebinars from "./pages/home/UpcomingWebinars";
import Instructors from "./pages/home/Instructors";
import Footer from "./pages/home/Footer";

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
