import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Answers from './Answers';
import AC from './assets/acc.png';
import AB from './assets/app_dev.png';
import CT from './assets/coa.png';
import CC from './assets/con_cre.png';
import CB from './assets/cyb_sec.png';
import DM from './assets/dig_mar.png';
import UI from './assets/ui.png';
import WB from './assets/web_dev.png';
import GridExample from './components/card';
import ControlledCarousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/HeaderComponent';
import HeroSection from './components/herosection';
import ImgOverlay from './components/ImageOverlay';
import Login from './components/Login';
import Accounting from './pages/Accounting';
import AppDevelopment from './pages/AppDevelopment';
import Coaching from './pages/Coaching';
import ContentCreation from './pages/ContentCreation';
import CyberSecurity from './pages/CyberSecurity';
import DigitalMarketing from './pages/DigitalMarketing';
import UXUIDesign from './pages/UXUIDesign';
import WebDevelopment from './pages/WebDevelopment';
import Signup from './signup';
import StartSelling from './StartSelling';
import NotFound from './NotFound';
import Profile from './components/Profile';
import SellerSignup from './SellerSignup';
import Services from './Services';
import SellerLogin from './SellerLogin';
import SelectAuthPage from './components/SelectAuthPage';
import AddService from './AddService';
import ServiceDetails from './components/ServiceDetails';
import AboutUs from './components/AboutUs';
import HelpSupport from './components/HelpSupport';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

console.log(SellerSignup);

const cardDataSets = [
  { image: WB, title: 'Web Development', text: '' },
  { image: AB, title: 'App Development', text: '' },
  { image: CB, title: 'Cyber Security', text: '' },
  { image: CT, title: 'Coaching', text: '' },
  { image: DM, title: 'Digital Marketing', text: '' },
  { image: CC, title: 'Content Creation', text: '' },
  { image: AC, title: 'Accounting', text: '' },
  {image: UI,title:'UI/UX Design',text:''}
];


const hoverColors = ['#8F00FF', '#FF00FF','#0000FF','#00FF00', '#FFFF00','#FFA500','#FF0000','#00FFFF'];


function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ControlledCarousel />
      <div className='cardheading'>Our Popular Services</div>
      <div className="grid">
        <GridExample cardData={cardDataSets} hoverColors={hoverColors} />
      </div>
      <ImgOverlay />
      <Footer />
    </>
  );
}



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-selling" element={<StartSelling />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/ux-ui-design" element={<UXUIDesign />} />
        <Route path="/profile" element={<Profile email={localStorage.getItem('email')} />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/sellstart" element={<SelectAuthPage />} />
        <Route path="/seller-reg" element={<SellerSignup/>}/>
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<Services />}/>
        <Route path="/help-support" element={<HelpSupport/>} />
        <Route path="/service/:id" element={<ServiceDetails/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;