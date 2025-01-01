import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Profile.css'; // Ensure this is the correct path

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('email'); // Retrieve email from localStorage
      if (!email) {
        setError('No email found in localStorage. Please log in again.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/profile?email=${email}`);
        setUser(response.data);
        setEditedUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveClick = async (field) => {
    try {
      const email = localStorage.getItem('email'); // Ensure email is sent during updates
      const updatedData = { ...editedUser, email };
      await axios.put('http://127.0.0.1:5000/profile', updatedData);
      setUser(editedUser);
      setIsEditing((prev) => ({ ...prev, [field]: false }));
      alert('Changes saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save changes. Please try again.');
    }
  };

  const handleInputChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>No user data available.</div>;

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        {['name', 'profession', 'address', 'phone', 'mobile'].map((field) => (
          <div key={field} className="profile-detail">
            <div className="profile-detail-label">{field.charAt(0).toUpperCase() + field.slice(1)}</div>
            <div className="profile-detail-value">
              {isEditing[field] ? (
                <>
                  <input
                    type="text"
                    value={editedUser[field] || ''}
                    onChange={(e) => handleInputChange(e, field)}
                  />
                  <button
                    className="btn btn-outline-primary save-btn"
                    onClick={() => handleSaveClick(field)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {user[field] || 'Not provided'}
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleEditClick(field)}
                  >
                    ✏️
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
