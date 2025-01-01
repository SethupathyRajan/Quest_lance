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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add service logic here (e.g., send to backend)
    console.log(service);
  };

  return (
    <>
    <Header/>
    <div className="add-service-container">
      <h1>Provide Your Service</h1>
      <p>
        List your skills and attract customers to get started on your journey as
        a seller.
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
          type="url"
          placeholder="Image URL"
          value={service.imageUrl}
          onChange={(e) =>
            setService({ ...service, imageUrl: e.target.value })
          }
          required
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AddService;
