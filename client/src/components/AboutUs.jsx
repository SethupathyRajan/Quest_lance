import React, { useState } from 'react';
import '../styles/AboutUs.css'; // Import CSS styles
import Header from './HeaderComponent';
import Footer from './Footer';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null); // Track selected team member

  const teamMembers = [
    {
      name: "Varshan",
      role: "Team Leader and Webmaster",
      description: "Varshan is the visionary and leader of the Questlance team. As the Team Leader, he sets the strategic direction and oversees all operations, ensuring the platform runs efficiently. With extensive experience in web development, Varshan also works hands-on to maintain the website and guide the development team. He is dedicated to continuous improvement and making Questlance a leading platform for freelancers and clients alike."
    },
    {
      name: "Sethupathy",
      role: "Webmaster",
      description: "Sethupathy serves as the primary webmaster at Questlance. His responsibilities include managing and maintaining the Questlance website, ensuring that it is always live, fully functional, and updated with the latest features. He handles website optimization, security, and performance, and makes sure that all integrations and third-party tools are smoothly working. Sethupathy is also responsible for troubleshooting issues and ensuring an excellent user experience."
    },
    {
      name: "Sahith",
      role: "Project Archivist",
      description: "Sahith plays a critical role in organizing and maintaining Questlance's project archives. As the Project Archivist, he ensures that every project, past and present, is properly documented and archived. This includes managing project timelines, resources, communications, and outcomes. He works closely with both clients and freelancers to ensure that all project details are captured accurately, and he ensures that information is easily accessible for future reference or audits."
    },
    {
      name: "Subash Chandran",
      role: "Project Manager",
      description: "Subash is the glue that holds Questlance's projects together. As Project Manager, he oversees the planning, execution, and delivery of all projects. Subash is responsible for liaising between clients and freelancers to ensure clear communication and that all project requirements are understood and met. He schedules and tracks project milestones, allocates resources, manages budgets, and resolves any issues that may arise. His role is critical to ensuring projects are completed on time, within scope, and to the highest quality standards."
    },
  ];

  const handleCardClick = (index) => {
    setSelectedMember(prevSelected => prevSelected === index ? null : index); // Toggle zoom effect on click
  };

  return (
    <>
      <Header />
      <div className="about-us-container">
        <h1>About Us</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-member-card ${selectedMember === index ? 'zoomed' : ''}`}
              onClick={() => handleCardClick(index)} // Click handler for zooming in/out
            >
              <h2>{member.name}</h2>
              <p><strong>Role:</strong> {member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
