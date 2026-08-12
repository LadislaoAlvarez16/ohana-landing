import TopBenefits from "@/src/components/TopBenefits";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import Steps from "@/src/components/Steps";
import CTA from "@/src/components/CTA";
import Gallery from "@/src/components/Gallery";
import Services from "@/src/components/Services";

export default function Page() {
  return (
    <>
      <Hero />
      <TopBenefits />
      <Gallery />
      <Services />
      <Steps />
      <Features />
      <CTA />
    </>
  );
}