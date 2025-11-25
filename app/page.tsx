// app/page.tsx
import Header from './components/Header';
import ContactFloater from './components/ContactFloater';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import FunFacts from './components/FunFacts';
import Footer from './components/Footer';
import ProfessionalWorkSection from './components/ProfessionalWorkSection';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <div className="flex gap-12">
        <main className="flex flex-col gap-12 max-w-4xl">
          <Header />
          <ContactFloater />
          <ProfileSection />
          <ProfessionalWorkSection/>
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <FunFacts />
      </div>
      {/*<Footer */}
    </div>
  );
}