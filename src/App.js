
import './App.css';
import Call from './components/call/Call';
import CaseStudies from './components/casestudies/CaseStudies';
import CustomMobile from './components/custom-mobile/CustomMobile';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import KnowAbout from './components/know-about/KnowAbout';
import NavBar from './components/navbar/NavBar';
import Partner from './components/partner/Partner';
import Skills from './components/skills/Skills';
import Specializing from './components/specializing/Specializing';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Partner />
      <CaseStudies />
      <CustomMobile />
      <Specializing />
      <KnowAbout />
      <Call />
      <Footer />
    </>
  );
}

export default App;
