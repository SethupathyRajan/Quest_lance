import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Ensure this is the correct path

const Profile = ({ email }) => {
  const [user, setUser] = useState(null); // User data fetched from the server
  const [isEditing, setIsEditing] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/profile?email=${email}`);
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
  }, [email]);

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveClick = async (field) => {
    try {
      const updatedData = { ...editedUser, email }; // Include email in the payload
      await axios.put('http://127.0.0.1:5000/profile', updatedData);
      setUser(editedUser); // Update local state after successful save
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

  // Fallback for projects if not passed
  const projects = editedUser.projects || [];

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header">
          <div className="profile-photo-container">
            <img
              src={editedUser.avatarUrl || 'default-avatar.png'} // Fallback if no avatar URL
              alt="Profile"
              className="profile-photo"
            />
          </div>
          <div className="profile-details">
            {/* Editable Fields */}
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

        {/* Project Progress Section */}
        <div className="project-progress">
          <h3>Previous Projects</h3>
          {projects.length === 0 ? (
            <p>No projects available</p>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="project-item">
                <h4>{project.name}</h4>
                {project.tasks?.map((task, taskIndex) => (
                  <div key={taskIndex} className="progress-container">
                    <div className="progress-label">
                      {task.name} ({task.progress}%)
                    </div>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
