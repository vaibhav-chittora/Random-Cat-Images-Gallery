# Random Cat Image Gallery

## Overview

This project is a **random cat image gallery** built with React and Tailwind CSS. It fetches cat images from **The Cat API** and displays them in a grid layout. Users can:

- Load random cat images
- Filter images by breed
- Load more images dynamically
- View cat details by clicking on an image

## Tech Stack

- **React** (with Vite for fast development)
- **Tailwind CSS** (for styling)
- **Axios** (for API requests)
- **The Cat API** (for fetching images)

## Features

### ✅ Fetch & Display Random Cat Images

- Uses **The Cat API** to fetch images and display them in a responsive gallery.

### ✅ Breed Filtering

- Dropdown menu to filter images by breed.

### ✅ Load More Button

- Initially loads **20 images**.
- Clicking "Load More" fetches **20 more images** dynamically.

### ✅ Cat Detail Page

- Clicking an image opens a detailed view with additional information.

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhav-chittora/Random-Cat-Images-Gallery.git

   cd cat-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add your API key:
   ```env
   VITE_CAT_API_KEY=your_api_key_here
   ```
4. Run the project:
   ```bash
   npm run dev
   ```

## API Usage

- The project fetches images from:
  ```
  https://api.thecatapi.com/v1/images/search?limit=20&page=1&api_key=YOUR_API_KEY
  ```
- Authentication is done using an API key in the headers.

## Future Improvements

- Add pagination for better performance.
- Improve UI with animations.
- Implement user favorites.
