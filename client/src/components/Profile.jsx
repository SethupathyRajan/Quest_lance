import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Profile.css'; // Ensure this is the correct path

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(null); // For storing the selected profile picture

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

      // Prepare the form data to send the profile picture if available
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }

      if (profilePic) {
        formData.append('profile_picture', profilePic);
      }

      await axios.put('http://localhost:5000/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

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

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>No user data available.</div>;

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        
        {/* Profile Picture Section */}
        <div className="profile-detail">
          <div className="profile-detail-label">Profile Picture</div>
          <div className="profile-detail-value">
            {isEditing['profile_picture'] ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                />
                <button
                  className="btn btn-outline-primary save-btn"
                  onClick={() => handleSaveClick('profile_picture')}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <img 
                  src={user.profile_picture || 'default-profile-pic.png'} 
                  alt="Profile" 
                  className="profile-img"
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleEditClick('profile_picture')}
                >
                  ✏️
                </button>
              </>
            )}
          </div>
        </div>

        {/* Other fields (name, profession, address, phone, etc.) */}
        {['name', 'profession', 'address', 'phone', 'mobile'].map((field) => (
          <div key={field} className="profile-detail">
            <div className="profile-detail-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </div>
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
