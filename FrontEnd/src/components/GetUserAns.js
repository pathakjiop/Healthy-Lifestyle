  import React, { useState } from 'react';
  import axios from 'axios';
  import './GetUserAns.css';
  import DisplayNestedJSON from './DisplayNestedJSON';

  function GetUserAns() {
    // Initial state for all answers, assuming answers are strings; adjust as needed
    const [answers, setAnswers] = useState({
      user_ans1: '',
      user_ans2: '',
      user_ans3: '',
      user_ans4: '',
      user_ans5: '',
      user_ans6: '',
      user_ans7: '',
      user_ans8: '',
      user_ans9: '',
      user_ans10: '',
      user_ans11: '',
      user_ans12: '',
      user_ans13: '',
      user_ans14: '',
      user_ans16: '',
      user_ans17: '',
      user_ans18: '',
      user_ans19: '',
      user_ans20: '',
      user_ans21: '',
      user_ans22: '',
      user_ans23: '',
      user_ans24: '',
      user_ans25: '',
      // Add more as needed up to user_ans25
    });
  //   const [apiResponse, setApiResponse] = useState(null); // State to store API response
  // const [responseMessage, setResponseMessage] = useState(""); // State to store response message
  // const [extractedText, setExtractedText] = useState(""); // State to store extracted text


  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
  //   };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post('http://localhost:5000/get-user-ans', answers);
    //     const data = response.data;
    //     setApiResponse(data); // Store API response in state
  
    //     // Assuming the API response structure is known and consistent
    //     const extractedTexts = data.candidates.map(candidate =>
    //       candidate.content.parts.map(part => part.text).join('\n')
    //     ).join('\n\n');
  
    //     // Format the extracted text before setting it to state
    //     const formattedText = formatText(extractedTexts);
    //     setExtractedText(formattedText);
    //   } catch (error) {
    //     console.error('There was an error!', error);
    //   }
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post('http://localhost:5000/get-user-ans', answers);
    //     console.log(response.data);
    //     setApiResponse(response.data); // Store API response in state
    
    //     // Example of extracting text if your API response structure matches the one shared before
    //     const extractedTexts = response.data.candidates.map(candidate =>
    //       candidate.content.parts.map(part => part.text).join('\n')
    //     ).join('\n\n');
    //     console.log(extractedTexts); // Log the extracted texts
    //   } catch (error) {
    //     console.error('There was an error!', error);
    //   }
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post('http://localhost:5000/get-user-ans', answers);
    //     const data = response.data;
    //     setApiResponse(data); // Store API response in state
    
    //     // Assuming the API response structure is known and consistent
    //     const extractedTexts = data.candidates.map(candidate =>
    //       candidate.content.parts.map(part => part.text).join('\n')
    //     ).join('\n\n');
    //     setExtractedText(extractedTexts); // Update state with the extracted text
    //   } catch (error) {
    //     console.error('There was an error!', error);
    //   }
    // };
    


    const [responseMessage, setResponseMessage] = useState("");
    const [extractedText, setExtractedText] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/get-user-ans', answers);
        const data = response.data;
        const extractedText = extractTextFromJSON(data);
        setExtractedText(extractedText);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };


    const renderFormFields = () => {
      const questions = [
        "How often do you engage in physical exercise?",
        "How would you rate your sleep quality?",
        "How balanced is your diet?",
        "How often do you consume fruits and vegetables?",
        "How often do you practice stress-relief techniques (e.g., meditation, deep breathing)?",
        "How frequently do you consume sugary or processed foods?",
        "How often do you engage in activities that promote mental well-being (e.g., hobbies, socializing)?",
        "How well do you manage your daily hydration needs?",
        "How often do you engage in cardiovascular exercises (e.g., walking, jogging, swimming)?",
        "How conscious are you of your portion sizes when eating?",
        "How often do you have a comprehensive medical check-up?",
        "How often do you take breaks from prolonged sitting or screen time?",
        "How frequently do you consume alcoholic beverages?",
        "How often do you engage in strength training exercises (e.g., weightlifting, bodyweight exercises)?",
        "How well do you manage your stress levels?",
        "How often do you engage in outdoor activities?",
        "How well do you maintain personal hygiene?",
        "How often do you participate in activities that promote social connection?",
        "How often do you practice mindfulness or relaxation techniques?",
        "How often do you eat fast food or processed snacks",
        "How often do you prioritize your mental health?",
        "How well do you manage your work-life balance?",
        "How often do you engage in activities that promote flexibility and mobility (e.g., stretching, yoga)?",
        "How often do you engage in activities that stimulate your mind (e.g., reading, puzzles)?",
        "How often do you engage in activities that promote spiritual well-being (e.g., meditation, prayer)?",
      ];


      return questions.map((question, index) => (
        <div key={`question-${index + 1}`}>
          <label htmlFor={`user_ans${index + 1}`}>{index + 1}. {question}</label>
          <input
            type="text"
            id={`user_ans${index + 1}`}
            name={`user_ans${index + 1}`}
            value={answers[`user_ans${index + 1}`]}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>
      ));
    };
  
    // Function to extract only the text part from the JSON response
    const extractTextFromJSON = (data) => {
      if (!data || !data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
        return ""; // Return an empty string if the data structure is not as expected
      }
  
      // Extract text from content parts
      const parts = data.candidates[0].content.parts;
      let text = "";
      parts.forEach(part => {
        if (part.text) {
          if (part.text.startsWith("**")) {
            text += "\n"; // Add a new line before each heading
            text += "<strong>" + part.text + "</strong>\n"; // Wrap heading in <strong> tags
          } else {
            text += part.text + "\n"; // Concatenate text with a newline character
          }
        }
      });
      return text.trim(); // Trim any leading/trailing whitespace
    };
  
    return (
      <div>
        <h2>User Lifestyle Questionnaire</h2>
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
        
        {/* Display extracted text */}
        {extractedText && (
          <div>
            <h3>Extracted Text:</h3>
            <p dangerouslySetInnerHTML={{ __html: extractedText }}></p>
          </div>
        )}
      </div>
    );
  }
  export default GetUserAns;