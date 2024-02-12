# Phase-2-Code-Challenge-Bank-of-Flatiron

## Table of Contents
- [Overview](#overview)
- [Project Setup](#project-setup)
- [How to Run](#how-to-run)
- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview
This React application is a mini web app that displays a list of recent bank transactions. Users can view a table of transactions, fill out and submit a form to add new transactions (not persisted to the backend), and filter transactions using a search bar. Additionally, there are bonus features like sorting transactions and deleting transactions from the table.

## Project Setup
1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Create a `db.json` file in the project directory with sample data.
4. Run the JSON DB server using the command: `json-server --watch db.json`
5. Install dependencies by running: `npm install`

## How to Run
To start the React application, use the following command:
```bash
npm start
Visit http://localhost:3000 in your web browser to view the application.

Features
View a table of all transactions.
Add new transactions using the form.
Filter transactions by typing into the search bar.
Bonus features: Sort transactions alphabetically, Delete transactions from the table.
Project Structure
src/
components/: React components (TransactionTable, TransactionForm, SearchBar, etc.)
index.js: Entry point for React rendering.
App.js: Main React component.
public/: Static assets and HTML files.
Dependencies
React
ReactDOM
json-server (for local data server)
Contributing
Fork the repository.
Create a new branch: git checkout -b feature/my-feature
Commit your changes: git commit -am 'Add my feature'
Push to the branch: git push origin feature/my-feature
Submit a pull request.
License
This project is licensed under the MIT License.