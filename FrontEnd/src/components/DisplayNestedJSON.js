import React from 'react';

const DisplayNestedJSON = ({ data }) => {
  // Function to recursively render JSON data
  const renderJSON = (jsonData) => {
    // Check if jsonData is an object
    if (typeof jsonData === 'object' && !Array.isArray(jsonData) && jsonData !== null) {
      return (
        <ul>
          {/* Iterate over object keys */}
          {Object.keys(jsonData).map((key, index) => (
            <li key={index}>
              {/* Render key */}
              <strong>{key}: </strong>
              {/* Recursively render value */}
              {renderJSON(jsonData[key])}
            </li>
          ))}
        </ul>
      );
    }
    // Check if jsonData is an array
    else if (Array.isArray(jsonData)) {
      return (
        <ul>
          {/* Iterate over array items */}
          {jsonData.map((item, index) => (
            <li key={index}>
              {/* Recursively render array item */}
              {renderJSON(item)}
            </li>
          ))}
        </ul>
      );
    }
    // Render primitive values
    else {
      return <span>{jsonData}</span>;
    }
  };

  return (
    <div>
      <h2>Suggetion for the user to Improve</h2>
      {renderJSON(data)}
    </div>
  );
};

export default DisplayNestedJSON;
