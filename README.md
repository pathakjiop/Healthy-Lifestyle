# Healthy-Lifestyle Project

![Photo](https://github.com/pathakjiop/Healthy-Lifestyle/assets/149372274/dc27aa6c-eb86-423a-8412-80388c31f3af)


## Overview

The Healthy-Lifestyle project is designed to promote wellness and encourage individuals to achieve and maintain an optimal BMI (Body Mass Index). By inputting basic information (name, age, height, weight, gender), users can receive personalized BMI calculations through the Gemini API. Moreover, the project guides users on how to attain their ideal BMI through a comprehensive, 25-question questionnaire, offering tailored advice and actionable steps.

### Technologies Used

- **Backend:** Python
- **Frontend:** ReactJS
- **API:** Gemini API

## Features

- **BMI Calculation:** Instantly calculates BMI using user-provided data.
- **Personalized Advice:** Generates customized recommendations for reaching an ideal BMI based on the user's current health metrics.
- **Interactive Questionnaire:** Engages users with a 25-question survey to understand their lifestyle, providing detailed guidance for achieving a healthier BMI.

## How to Run

### Prerequisites

- Ensure you have Python installed on your system.
- Node.js and npm must be installed for the ReactJS frontend.

## Installation

To install the Ayurvedic Information System, follow these steps:

### 1. Clone the Repository

First, clone the project repository to your local machine using Git.

```bash
git clone https://github.com/pathakjiop/Healthy-Lifestyle.git
cd Healthy-Lifestyle
```

### 2. Set Up Environment Variables

 1. Make a .env file in the Back-End.

 2. And add the gemini api key.
      1. To get gemini api key go to https://aistudio.google.com/app/apikey
      2. Click on Create API key.
      3. Go to search box and select the option ( My First Project ).
      4. Now, click on ( Create API key on existing project ).
      5. Just copy the API key and move towards next step.

3. Write this code in the .env file.

  ```   
GEMINI_API_KEY = YOUR_GEMINI_API_KEY    
```

Your gemini api key is ready to use.

4. Go to Front_End in the file explorer and right click in the file explorer and click on the option Open in Terminal.

5. Write the code mention below


```bash
npm install 
```
After every thing installed you are ready to use our project.

## How To Start The Project

### Starting Backend

1.  Go to Back_End in the file explorer and right click in the file explorer and click on the option Open in Terminal.

2. Write the code mention below.

```bash
python run.py
```

3. The Backend is now started.

### Starting Backend

1.  Go to Front_End in the file explorer and right click in the file explorer and click on the option Open in Terminal.

2. Write the code mention below.

```bash
npm start
```
3. The Frontend is now started.

## How It's Beneficial

This project not only offers a straightforward way to understand one's BMI but also provides a clear, personalized roadmap to achieve a healthier lifestyle. By considering individual health metrics and lifestyle choices, the Healthy-Lifestyle project empowers users with knowledge and practical steps to reach their health goals. Whether you're looking to maintain your current BMI or work towards a new target, this tool is designed to support you every step of the way.

## Usage

1. **BMI Calculation:** Enter your name, age, height, weight, and gender on the homepage. Submit to receive your current BMI.
2. **Achieving Ideal BMI:** Follow the personalized advice provided based on your BMI calculation to understand the next steps.
3. **Questionnaire:** Complete the 25-question survey for more detailed recommendations tailored to your lifestyle and preferences.

## Contributing

We welcome contributions! If you're interested in improving the Healthy-Lifestyle project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

