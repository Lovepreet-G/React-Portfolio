# Portfolio React App with Node.js API

This repository contains a portfolio website built with React for the frontend and a Node.js API for the backend. The API serves project and skill data from a MongoDB database.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- MongoDB (optional, if you want to run the API locally)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio-react-node-api
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

## Running the Backend API

1. If you haven't already, make sure MongoDB is running locally on your machine.

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Start the Node.js server:

   ```bash
   npm start
   ```

   This will start the backend API at `http://localhost:8888`.

## Running the Frontend React App

1. Navigate to the client directory:

   ```bash
   cd ../client
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

   This will start the frontend React app at `http://localhost:3000`.

## Usage

Once both the backend API and frontend React app are running, you can visit `http://localhost:3000` in your web browser to view the portfolio website.

## Project Structure

- `/client`: Contains the frontend React app.
- `/server`: Contains the backend Node.js API.

## Dependencies

### Frontend (React App)

- axios: For making HTTP requests to the backend API.

### Backend (Node.js API)

- express: Web framework for Node.js.
- mongodb: MongoDB driver for Node.js.
```

You can copy and paste this entire content into a README.md file in your project repository.
