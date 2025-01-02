import React, { useState } from "react";
import axios from "axios";
import "./SellerSignup.css";
import logo from './assets/logo.png'

const SellerSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        skills: "",
        experience: "",
        portfolio_url: "", // Optional
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        try {
            const res = await axios.post("http://localhost:5000/register", {
                ...formData,
                portfolio_url: formData.portfolio_url || undefined, // Exclude if empty
            });
            setMessage(res.data.message);
            setFormData({
                name: "",
                email: "",
                password: "",
                phone: "",
                skills: "",
                experience: "",
                portfolio_url: "",
            });
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div className="seller-signup-container">
            <div className="seller-logo-container">
                <img src={logo} alt="Logo" className="seller-logo-img" />
            </div>
            <div className="seller-signup-form">
                <h2>Seller Signup</h2>
                {message && <div className="seller-text-success">{message}</div>}
                {error && <div className="seller-text-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Skills</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g., React, Node.js"
                            value={formData.skills}
                            onChange={(e) =>
                                setFormData({ ...formData, skills: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Experience (Years)</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter your experience"
                            value={formData.experience}
                            onChange={(e) =>
                                setFormData({ ...formData, experience: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Portfolio URL (Optional)</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Enter your portfolio URL"
                            value={formData.portfolio_url}
                            onChange={(e) =>
                                setFormData({ ...formData, portfolio_url: e.target.value })
                            }
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="seller-signup-btn">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerSignup;
