from app import app
from flask import request, jsonify
import requests
import os
import json

@app.route('/get-user-details', methods=['POST'])
def get_user_details():
    # Assuming JSON data is sent in the request body
    data = request.json
    print("Name: ", data.get('user_name'))
    print("Age: ", data.get('user_age'))
    print("Height: ", data.get('user_height'))
    print("Weight: ", data.get('user_weight'))
    print("Gender: ", data.get('user_gender'))

    # Process the data and return a response
    # Example response
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={os.environ.get('GEMINI_API_KEY')}"
    data = {
      "contents": [{
        "parts":[{
          "text": f"name = {data.get("user_name")}, age = {data.get('user_age')}, height ={data.get('user_height')}, weight = {data.get('user_weight')}, gender = {data.get('user_gender') }give me the bmi of user with user name, age, height, weight, gender and tell user how he can achive a ideal bmi with steps. Tell user what weight he have to achive. In JSON"}]}]}

    response = requests.post(url, json=data)

    parsed_response = response.json()

    if "candidates" in parsed_response and len(parsed_response["candidates"]) > 0:
        candidate = parsed_response["candidates"][0]
        if "content" in candidate and "parts" in candidate["content"] and len(candidate["content"]["parts"]) > 0:
            text = candidate["content"]["parts"][0]["text"]
            return json.loads(text.replace("`", "").replace("JSON", "").replace("json",""))
    else:
        return "No text found in the response."
  
@app.route('/get-user-ans', methods=['POST'])
def get_user_ans():
    # Assuming JSON data is sent in the request body
    data = request.json
    print("01 How often do you engage in physical exercise? : ", data.get('user_ans1'))
    print("02 How would you rate your sleep quality? : ", data.get('user_ans2'))
    print("03 How balanced is your diet? : ", data.get('user_ans3'))
    print("04 How often do you consume fruits and vegetables? : ", data.get('user_ans4'))
    print("05 How often do you practice stress-relief techniques (e.g., meditation, deep breathing)?: ", data.get('user_ans5'))
    print("06 How frequently do you consume sugary or processed foods? : ", data.get('user_ans6'))
    print("07 How often do you engage in activities that promote mental well-being (e.g., hobbies, socializing)?: ", data.get('user_ans7'))
    print("08 How well do you manage your daily hydration needs? : ", data.get('user_ans8'))
    print("09 How often do you engage in cardiovascular exercises (e.g., walking, jogging, swimming)? : ", data.get('user_ans9'))
    print("10 How conscious are you of your portion sizes when eating? : ", data.get('user_ans10'))
    print("11 How often do you have a comprehensive medical check-up? : ", data.get('user_ans11'))
    print("12 How often do you take breaks from prolonged sitting or screen time? : ", data.get('user_ans12'))
    print("13 How frequently do you consume alcoholic beverages? : ", data.get('user_ans13'))
    print("14 How often do you engage in strength training exercises (e.g., weightlifting, bodyweight exercises)? : ", data.get('user_ans14'))
    print("15 How well do you manage your stress levels? : ", data.get('user_ans15'))
    print("16 How often do you engage in outdoor activities? : ", data.get('user_ans16'))
    print("17 How well do you maintain personal hygiene? : ", data.get('user_ans17'))
    print("18 How often do you participate in activities that promote social connection? : ", data.get('user_ans18'))
    print("19 How often do you practice mindfulness or relaxation techniques? : ", data.get('user_ans19'))
    print("20 How often do you eat fast food or processed snacks? : ", data.get('user_ans20'))
    print("21 How often do you prioritize your mental health? : ", data.get('user_ans21'))
    print("22 How well do you manage your work-life balance? : ", data.get('user_ans22'))
    print("23 How often do you engage in activities that promote flexibility and mobility (e.g., stretching, yoga)? : ", data.get('user_ans23'))
    print("24 How often do you engage in activities that stimulate your mind (e.g., reading, puzzles)? : ", data.get('user_ans24')) 
    print("25 How often do you engage in activities that promote spiritual well-being (e.g., meditation, prayer)? : ", data.get('user_ans25'))
    # Process the data and return a response
    # Example response
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={os.environ.get('GEMINI_API_KEY')}"
    data = {
    "contents": [{
        "parts": [
            {"text": f"01 How often do you engage in physical exercise? : {data.get('user_ans1')}"},
            {"text": f"02 How would you rate your sleep quality? : {data.get('user_ans2')}"},
            {"text": f"03 How balanced is your diet? : {data.get('user_ans3')}"},
            {"text": f"04 How often do you consume fruits and vegetables? : {data.get('user_ans4')}"},
            {"text": f"05 How often do you practice stress-relief techniques (e.g., meditation, deep breathing)?: {data.get('user_ans5')}"},
            {"text": f"06 How frequently do you consume sugary or processed foods? : {data.get('user_ans6')}"},
            {"text": f"07 How often do you engage in activities that promote mental well-being (e.g., hobbies, socializing)?: {data.get('user_ans7')}"},
            {"text": f"08 How well do you manage your daily hydration needs? : {data.get('user_ans8')}"},
            {"text": f"09 How often do you engage in cardiovascular exercises (e.g., walking, jogging, swimming)? : {data.get('user_ans9')}"},
            {"text": f"10 How conscious are you of your portion sizes when eating? : {data.get('user_ans10')}"},
            {"text": f"11 How often do you have a comprehensive medical check-up? : {data.get('user_ans11')}"},
            {"text": f"12 How often do you take breaks from prolonged sitting or screen time? : {data.get('user_ans12')}"},
            {"text": f"13 How frequently do you consume alcoholic beverages? : {data.get('user_ans13')}"},
            {"text": f"14 How often do you engage in strength training exercises (e.g., weightlifting, bodyweight exercises)? : {data.get('user_ans14')}"},
            {"text": f"15 How well do you manage your stress levels? : {data.get('user_ans15')}"},
            {"text": f"16 How often do you engage in outdoor activities? : {data.get('user_ans16')}"},
            {"text": f"17 How well do you maintain personal hygiene? : {data.get('user_ans17')}"},
            {"text": f"18 How often do you participate in activities that promote social connection? : {data.get('user_ans18')}"},
            {"text": f"19 How often do you practice mindfulness or relaxation techniques? : {data.get('user_ans19')}"},
            {"text": f"20 How often do you eat fast food or processed snacks? : {data.get('user_ans20')}"},
            {"text": f"21 How often do you prioritize your mental health? : {data.get('user_ans21')}"},
            {"text": f"22 How well do you manage your work-life balance? : {data.get('user_ans22')}"},
            {"text": f"23 How often do you engage in activities that promote flexibility and mobility (e.g., stretching, yoga)? : {data.get('user_ans23')}"},
            {"text": f"24 How often do you engage in activities that stimulate your mind (e.g., reading, puzzles)? : {data.get('user_ans24')}"},
            {"text": f"25 How often do you engage in activities that promote spiritual well-being (e.g., meditation, prayer)? : {data.get('user_ans25')}"},
            # Corrected to 'user_ans25' for consistency
            {"text": f" give me a advice about how can I improve my lifestyle or how can I have a healthy lifestyle"}
        ]
    }]
}
    
     # Make the external API call
    api_key = os.environ.get('GEMINI_API_KEY')
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={api_key}"
    response = requests.post(url, json=data)

    # Check if the response was successful
    if response.status_code == 200:
        try:
            # Attempt to parse the JSON response
            parsed_response = response.json()
            # Further processing based on parsed_response
            # (Adjust this part according to the structure of the response and your needs)
            return jsonify(parsed_response)  # Return a JSON response
        except ValueError:
            # Handle the case where parsing JSON fails
            return jsonify({"error": "Invalid response format from external API"}), 500
    else:
        # Handle the case where the API call was not successful
        return jsonify({"error": "External API call failed"}), 500
