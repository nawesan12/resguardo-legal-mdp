import { TopBar, Header, Footer, WhatsAppButton } from "@/components/layout";
import {
  Hero,
  Stats,
  CallToAction,
  Specialties,
  Team,
  About,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <CallToAction />
        <Specialties />
        <Team />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
