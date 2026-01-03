import React, { useState } from 'react';
import { User, Mail, MapPin, Bell, Save, Check } from 'lucide-react';
import './ModernForm.css';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry"
];

const ModernForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Abhijeet',
    lastName: 'Raj',
    email: 'ar@gmail.com',
    country: 'India',
    street: '1234 Main St',
    city: 'Haridwar',
    state: 'Uttarakhand',
    zip: '713301',
    notifications: {
      comments: false,
      candidates: false,
      offers: false,
      push: 'everything' // everything, same-email, none
    }
  });

  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  const handlePushChange = (val) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        push: val
      }
    }));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Personal Information</h1>
        <p>Manage your profile and notification preferences.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Personal Details Section */}
        <section className="form-section">
          <div className="section-header">
            <User className="section-icon" size={20} />
            <h2>Profile Details</h2>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setActiveField('firstName')}
                onBlur={() => setActiveField(null)}
                className={activeField === 'firstName' ? 'active' : ''}
              />
            </div>

            <div className="input-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setActiveField('lastName')}
                onBlur={() => setActiveField(null)}
                className={activeField === 'lastName' ? 'active' : ''}
              />
            </div>

            <div className="input-group full-width">
              <label>Email address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={16} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  className={activeField === 'email' ? 'active' : ''}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Address Section */}
        <section className="form-section">
          <div className="section-header">
            <MapPin className="section-icon" size={20} />
            <h2>Address Details</h2>
          </div>

          <div className="form-grid">
            <div className="input-group full-width">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="custom-select"
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label>Street address</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                onFocus={() => setActiveField('street')}
                onBlur={() => setActiveField(null)}
                className={activeField === 'street' ? 'active' : ''}
              />
            </div>

            <div className="input-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onFocus={() => setActiveField('city')}
                onBlur={() => setActiveField(null)}
                className={activeField === 'city' ? 'active' : ''}
              />
            </div>

            <div className="input-group">
              <label>State / Province</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="" disabled>Select a state</option>
                {indianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>ZIP / Postal code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                onFocus={() => setActiveField('zip')}
                onBlur={() => setActiveField(null)}
                className={activeField === 'zip' ? 'active' : ''}
              />
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Notifications Section */}
        <section className="form-section">
          <div className="section-header">
            <Bell className="section-icon" size={20} />
            <h2>Notifications</h2>
          </div>

          <div className="notification-group">
            <h3>By Email</h3>

            <div className="checkbox-item">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  checked={formData.notifications.comments}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="comments" className="custom-checkbox">
                  {formData.notifications.comments && <Check size={12} strokeWidth={4} />}
                </label>
              </div>
              <div className="label-text">
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someone posts a comment on a posting.</p>
              </div>
            </div>

            <div className="checkbox-item">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="candidates"
                  name="candidates"
                  checked={formData.notifications.candidates}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="candidates" className="custom-checkbox">
                  {formData.notifications.candidates && <Check size={12} strokeWidth={4} />}
                </label>
              </div>
              <div className="label-text">
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="checkbox-item">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={formData.notifications.offers}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="offers" className="custom-checkbox">
                  {formData.notifications.offers && <Check size={12} strokeWidth={4} />}
                </label>
              </div>
              <div className="label-text">
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>

          <div className="notification-group push-group">
            <h3>Push Notifications</h3>
            <p className="subtitle">These are delivered via SMS to your mobile phone.</p>

            <div className="radio-list">
              <div className="radio-item" onClick={() => handlePushChange('everything')}>
                <div className={`custom-radio ${formData.notifications.push === 'everything' ? 'selected' : ''}`}>
                  <div className="dot"></div>
                </div>
                <span>Everything</span>
              </div>

              <div className="radio-item" onClick={() => handlePushChange('same-email')}>
                <div className={`custom-radio ${formData.notifications.push === 'same-email' ? 'selected' : ''}`}>
                  <div className="dot"></div>
                </div>
                <span>Same as email</span>
              </div>

              <div className="radio-item" onClick={() => handlePushChange('none')}>
                <div className={`custom-radio ${formData.notifications.push === 'none' ? 'selected' : ''}`}>
                  <div className="dot"></div>
                </div>
                <span>No push notifications</span>
              </div>
            </div>
          </div>
        </section>

        <div className="form-actions">
          <button type="button" className="btn-cancel">Cancel</button>
          <button type="submit" className="btn-save">
            <Save size={16} /> Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModernForm;
