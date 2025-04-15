import { useEffect } from "react"
import Header from '../../components/Web/Header';
import HeroSections from './HeroSections';
import AboutSections from './AboutSections';
import SkillsSections from './SkillsSections';
// import ProjectsSections from './ProjectSections';
import ContactSections from './ContactSections';
import Footer from '../../components/Web/Footer';
import ScrollToTop from '../ScrollToTop';
const Home = () => {
  useEffect(() => {
    document.title = "Home | Keng";
  }, [])
  return (
    <div className="min-h-screen pt-8 max-w-7xl mx-auto bg-gradient-to-b from-white/10 to-transparent">
      <Header />

      {/* Hero Section Start */}
      <HeroSections />
      {/* Hero Section End */}

      {/* About Section Start */}
      <AboutSections />
      {/* About Section End */}

      {/* Skills Section Start */}
      <SkillsSections />
      {/* Skills Section End */}

      {/* Projects Section Start */}
      {/* <ProjectsSections /> */}
      {/* Projects Section End */}

      {/* Contact Section Start */}
      <ContactSections />
      {/* Contact Section End */}

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;