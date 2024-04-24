# Anime Project (Frontend)

Welcome to the Anime Project frontend! This project is a web application built using React 18, allowing users to browse, add, delete, and edit anime entries. Below you'll find information on how to set up and use the frontend application.

## Features:

- Browse a collection of anime entries.
- Add new anime entries with titles, descriptions, and images.
- Delete existing anime entries.
- Edit existing anime entries to update their details.

## Technologies Used:

- React 18: JavaScript library for building user interfaces.

## Project structure:
anime-project-frontend/
│
├── public/ # Public assets and index.html
│ └── index.html
│
├── src/ # Source code directory
│ ├── components/ # React components
│ │ ├── AnimeList.js # Component for displaying the list of anime entries
│ │ ├── AnimeItem.js # Component for displaying individual anime cards
│ │ ├── AddAnime.js # Component for adding new anime entries
│ │ ├── EditAnime.js # Component for editing existing anime entries
│ │ ├── DeleteAnime.js # Component for edeleting existing anime entries
│ ├── App.js # Main application component
│ ├── index.js # Entry point of the application
│ └── index.css # Global styles
│
├── .gitignore # Specifies intentionally untracked files to ignore
├── package.json # Project metadata and dependencies
├── README.md # Project documentation (you are here)
└── ...
