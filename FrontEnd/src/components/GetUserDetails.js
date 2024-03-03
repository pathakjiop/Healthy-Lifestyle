import React, { useState } from 'react';
import axios from 'axios';
import './GetUserDetails.css'; // Assuming you have a CSS file for styling
import DisplayNestedJSON from './DisplayNestedJSON'; // Import DisplayNestedJSON component

const GetUserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    user_name: '',
    user_age: '',
    user_height: '',
    user_weight: '',
    user_gender: ''
  });

  const [apiResponse, setApiResponse] = useState(null); // State to store API response
  const [responseMessage, setResponseMessage] = useState(""); // State to store response message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value })); // Fixing the function to update userDetails
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/get-user-details', userDetails); // Sending userDetails in the request
      console.log(response.data);
      setApiResponse(response.data); // Store API response in state
      setResponseMessage('User details submitted successfully!'); // Set success message
    } catch (error) {
      console.error('There was an error!', error);
      setResponseMessage('Failed to submit user details.'); // Set error message
    }
  };

  // Define renderFormFields function here if needed

  return (
    <div>
      <h2>User Lifestyle Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {/* Assuming you have some form fields, replace with your form inputs */}
        <input type="text" name="user_name" value={userDetails.user_name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="user_age" value={userDetails.user_age} onChange={handleChange} placeholder="age" required />
        <input type="text" name="user_height" value={userDetails.user_height} onChange={handleChange} placeholder="height" required />
        <input type="text" name="user_weight" value={userDetails.user_weight} onChange={handleChange} placeholder="weight ()" required />
        <input type="text" name="user_gender" value={userDetails.user_gender} onChange={handleChange} placeholder="gender" required />
        {/* Add other form fields */}
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {apiResponse && (
        <div>
          <h3>Survey Response</h3>
          <DisplayNestedJSON data={apiResponse} /> {/* Display the full response */}
        </div>
      )}
      {/* Display extracted text if needed */}
      {/* {extractedText && (
        <div>
          <h3>Extracted Text</h3>
          <pre>{extractedText}</pre>
        </div>
      )} */}
    </div>
  );
};

export default GetUserDetails;
