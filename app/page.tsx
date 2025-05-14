import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection"; // Optional

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection /> {/* Optional */}
      {/* Add more sections as needed */}
      {/* Optional */}
    </main>
  );
}
