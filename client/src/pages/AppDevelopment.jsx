import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent'
import Footer from '../components/Footer'
function AppDevelopment(){
  const services = [
    {
      title: 'Mobile App Design',
      description: 'Design and develop custom mobile applications for Android and iOS.',
      price: 'From ₹3432',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Mobile+App',
    },
    {
      title: 'React Native Development',
      description: 'Build cross-platform mobile apps with React Native.',
      price: 'From ₹5344',
      rating: '4.9',
      imageUrl: 'https://via.placeholder.com/300x200?text=React+Native+App',
    },
  ];

  return (
    <>
    <Header/>
    <div className="service-container">
      <header className="service-header">
        <h1>App Development</h1>
        <p>Explore our App Development services to bring your ideas to life.</p>
      </header>
      <div className="service-list">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AppDevelopment;
