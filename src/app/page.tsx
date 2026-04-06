import { TopBar, Header, Footer, WhatsAppButton } from "@/components/layout";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { BackToTop } from "@/components/layout/BackToTop";
import {
  Hero,
  Stats,
  CallToAction,
  Specialties,
  About,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/sections";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <TopBar />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <TrustBadges />
        <CallToAction />
        <Process />
        <Specialties />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
