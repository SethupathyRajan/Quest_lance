import React from 'react';
import AC from './assets/acc.png';
import AB from './assets/app_dev.png';
import CT from './assets/coa.png';
import CC from './assets/con_cre.png';
import CB from './assets/cyb_sec.png';
import DM from './assets/dig_mar.png';
import UI from './assets/ui.png';
import WB from './assets/web_dev.png';
import ControlledCarousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/HeaderComponent';
import ImgOverlay from './components/ImageOverlay';
import GridExample from './components/card';
import HeroSection from './components/herosection';



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

function App() {
  return (<div>
      <Header />
      <HeroSection/>
      <ControlledCarousel /> 
      <div className='cardheading'>
        Our Popular Services
      </div>
      <div className="grid">
        <GridExample cardData={cardDataSets} hoverColors={hoverColors} />
      </div>
      <ImgOverlay/>
      <Footer/>
    </div>
  );
}

export default App;