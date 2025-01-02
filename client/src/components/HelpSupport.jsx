import React, { useState } from 'react';
import '../styles/HelpSupport.css'; // Importing the custom CSS for Help & Support
import Header from './HeaderComponent';
import Footer from './Footer';

const HelpSupport = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const toggleTopic = (index) => {
    setSelectedTopic(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Header />
      <div className="help-support-container">
        <h1>Help & Support</h1>
        <div className="help-support-content">
          {[
            {
              title: "How to Create an Account",
              description: "To create an account on Questlance, click on the 'Sign Up' button on the homepage, enter your details, and follow the instructions to complete the registration.",
            },
            {
              title: "How to Post a Job",
              description: "After logging in, go to the 'Post a Job' section. Fill in the job details such as title, description, budget, and deadline, and click 'Post Job'.",
            },
            {
              title: "How to Hire a Freelancer",
              description: "To hire a freelancer, browse through freelancer profiles, read their reviews, and send them an offer for your job with specific terms and rates.",
            },
            {
              title: "How to Withdraw Funds",
              description: "You can withdraw your funds by going to the 'Withdraw' section in your account settings. Choose your preferred withdrawal method and follow the instructions.",
            },
            {
              title: "Account Security",
              description: "For account security, ensure you use a strong password, enable two-factor authentication, and avoid sharing your login details with others.",
            },
            {
              title: "Contact Support",
              description: "If you have any issues or need assistance, you can contact our support team via email at <a href='mailto:questlanceoffl@gmail.com'>questlanceoffl@gmail.com</a>.",
            }
          ].map((topic, index) => (
            <div 
              key={index} 
              className="support-card" 
              onClick={() => toggleTopic(index)}
              aria-expanded={selectedTopic === index ? "true" : "false"} 
              aria-controls={`topic-description-${index}`}
            >
              <div className="support-card-title">{index + 1}. {topic.title}</div>
              {selectedTopic === index && (
                <div id={`topic-description-${index}`} className="support-card-description">
                  {topic.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpSupport;
