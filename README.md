#  CS510-Project: Recipe Helper (Development Track)

Recipe Helper is a web extension tool designed to help cooking enthusiasts and individuals interested in learning how to cook. It explains the logic behind ingredients in a recipe and provides step-by-step instructions, fostering creativity and personalization. The tool promotes healthier eating habits and home cooking by simplifying the cooking process. Developed using Chrome extension technologies, it incorporates OpenAI GPT models for recipe search and ingredient categorization. The project is focusing on different aspects of development, including API integration, full-stack implementation, and information retrieval algorithms.

## Features

- Intuitive frontend user interface using React.js and PrimeReact
- Scalable backend using Python Flask
- Recipe extraction to acquire ingredients from searched recipes
- GPT model-based ingredient functionality analysis
- Customized information retrieval system for recipe use cases
- High-quality response generation from LLM models through prompt engineering
- User feedback collection and evaluation

## Installation

### Prerequisites

- Node.js
- Python
- Flask
- Chrome browser

### Steps

1. Clone the repository:

   ```
   git clone https://github.com/jessicahuang523/CS510-Project.git
   cd CS510-Project
   ```

2. Install frontend dependencies:

   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:

   ```
   cd backend
   pip install -r requirements.txt
   ```

## Usage

### Running the frontend

1. In the `frontend` directory, run:

   ```
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running the backend

1. In the `backend` directory, run:

   ```
   python app.py
   ```

2. The backend will be running on [http://localhost:5000](http://localhost:5000).

### Using the Chrome extension

1. Build the extension
   ```
   cd frontend/
   npm run build
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode (toggle in the top right corner).
4. Click "Load unpacked" and select the `build` folder from the project directory.
5. The Recipe Helper extension should now be available in your browser toolbar.

## Contributing

1. Fork the repository
