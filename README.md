# Sentiment Analysis App
The Sentiment Analysis App is a simple web application that allows users to analyze the sentiment of a given text input using a pre-trained DistilBERT model for sentiment classification. Users can input sentences, and the app will classify the sentiment as either "positive," "negative," or "neutral." The app also maintains a history of previously analyzed sentences and their corresponding sentiment results.
## How to Use the App
### 1.Setup
- Clone this repository to your local machine.
- Make sure you have Python and Node.js installed.
### 2.Install Dependencies
- Open a terminal or command prompt in the project directory.
- Install Python dependencies by running:
    pip install flask flask-cors transformers
- Install Node.js dependencies by running:
    npm install
### 3.Start the Backend Server
- In the terminal, navigate to the project directory and run:
    python server.py
- The Flask server will start, and you should see an output indicating that the server is running on http://127.0.0.1:5000/.
### 4.Start the Frontend React App
- In a separate terminal, navigate to the project directory and run:
    npm start
- The React app will start, and your default web browser should open automatically at http://localhost:3000/.
### Using the App
- Once the app is running, you'll see the Sentiment Analysis App user interface.
- Enter a sentence in the text input field and click the "Submit" button to analyze the sentiment.
- The app will classify the sentiment as "positive," "negative," or "neutral" and display the result.
- The last recorded sentiment result will be shown in the "Emotion" section.
- The app will also keep a history of previously analyzed sentences and their sentiment results, displayed in the "HISTORY" section.
### Understanding the Code
- The backend is built using Flask, and the frontend uses React.
- The Flask server is responsible for receiving the text input, analyzing its sentiment using the DistilBERT model, and maintaining the history of analyzed sentences.
- The React app provides the user interface, handles user input, and interacts with the Flask server through HTTP requests.

