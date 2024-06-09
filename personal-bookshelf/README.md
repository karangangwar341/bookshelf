
# Personal Bookshelf

## Overview

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in their browser using localStorage. The app has two main pages: a search page for finding books and a bookshelf page to view the books you have added to your personal collection.

## Features

- **Book Search**: Search for books in real-time using the Open Library API.
- **Add to Bookshelf**: Add books to your personal bookshelf.
- **My Bookshelf**: View and manage your personal collection of books.
- **Persistent Storage**: Your bookshelf is stored in the browser using localStorage, so it remains even after you refresh the page.

## Demo

You can access the live demo of the project [here](https://bookshelf-phi-one.vercel.app/).

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (https://nodejs.org)
- npm (Node package manager, which comes with Node.js)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/personal-bookshelf.git
    cd personal-bookshelf
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/`: Contains all the source code for the project.
  - `components/`: Reusable React components.
  - `pages/`: Page components for different routes.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
- `public/`: Contains the static assets for the project.
- `package.json`: Project metadata and dependencies.

## How to Use

### Search for Books

1. **Navigate to the Search Page**:
    - By default, the app opens on the search page.
    - Alternatively, click "Search Books" from the navigation bar.

2. **Search for a Book**:
    - Type the name of the book in the search bar.
    - Results will appear in real-time as you type.

3. **Add a Book to Your Bookshelf**:
    - Click the "Add to Bookshelf" button on the book card.
    - The button will be disabled once the book is added.

### View Your Bookshelf

1. **Navigate to the Bookshelf Page**:
    - Click "My Bookshelf" from the navigation bar.

2. **View Your Collection**:
    - All the books you have added will be displayed here.

## Technologies Used

- React
- Tailwind CSS
- Axios (for API requests)
- Open Library API

## Contribution

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at karangangwar341@gmail.com.
