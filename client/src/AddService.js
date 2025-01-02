import React, { useState } from "react";
import "./AddService.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/Footer";

const AddService = () => {
  const [service, setService] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    contactInfo: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the service object to be sent to the backend
    const serviceData = {
      title: service.title,
      description: service.description,
      price: service.price,
      imageUrl: service.imageUrl || "", // Image URL or empty string
      contactInfo: service.contactInfo, // Contact info field
      name: service.name, // Seller's name
    };

    // Send POST request to backend
    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Service added successfully:", data.message);
          // Optionally, clear the form after successful submission
          setService({
            title: "",
            description: "",
            price: "",
            imageUrl: "",
            contactInfo: "",
            name: "",
          });
        } else {
          console.log("Error adding service:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error during service creation:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="add-service-container">
        <h1>Provide Your Service</h1>
        <p>
          List your skills and attract customers to get started on your
          journey as a seller.
        </p>
        <form onSubmit={handleSubmit} className="add-service-form">
          <input
            type="text"
            placeholder="Service Title"
            value={service.title}
            onChange={(e) =>
              setService({ ...service, title: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Service Description"
            value={service.description}
            onChange={(e) =>
              setService({ ...service, description: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Starting Price (e.g., $500)"
            value={service.price}
            onChange={(e) =>
              setService({ ...service, price: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Contact Information"
            value={service.contactInfo}
            onChange={(e) =>
              setService({ ...service, contactInfo: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Service Provider's Name"
            value={service.name}
            onChange={(e) =>
              setService({ ...service, name: e.target.value })
            }
            required
          />
          <input
            type="url"
            placeholder="Image URL (optional)"
            value={service.imageUrl}
            onChange={(e) =>
              setService({ ...service, imageUrl: e.target.value })
            }
          />
          <button type="submit">Add Service</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddService;
