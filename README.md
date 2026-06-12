

# React Beginner Website - Complete Command Guide
# React + Vite
## Requirements

Install the following software:

1. Node.js
2. VS Code
3. Git (Optional)

Verify installation:

```bash
node -v
npm -v
git --version
```

---

# Create a New React Project

Using Vite:

```bash
npm create vite@latest react-beginner-website
```

Select:

```text
Framework: React
Variant: JavaScript
```

Move to project folder:

```bash
cd react-beginner-website
```

Install dependencies:

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Stop server:

```bash
Ctrl + C
```

---

# Install React Router

```bash
npm install react-router-dom
```

Check installed package:

```bash
npm list react-router-dom
```

---

# Install Additional Packages

Install Bootstrap:

```bash
npm install bootstrap
```

Install Axios:

```bash
npm install axios
```

Install React Icons:

```bash
npm install react-icons
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# NPM Commands

Install all dependencies:

```bash
npm install
```

Install specific package:

```bash
npm install package-name
```

Install as development dependency:

```bash
npm install package-name --save-dev
```

Remove package:

```bash
npm uninstall package-name
```

Update packages:

```bash
npm update
```

View installed packages:

```bash
npm list
```

---

# Git Commands

Initialize Git:

```bash
git init
```

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial Commit"
```

Connect GitHub Repository:

```bash
git remote add origin https://github.com/username/repository-name.git
```

Check remote:

```bash
git remote -v
```

Push code:

```bash
git push -u origin main
```

Pull latest code:

```bash
git pull origin main
```

Clone repository:

```bash
git clone https://github.com/username/repository-name.git
```

---

# Create Components

Example structure:

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Header.jsx
│   └── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Contact.jsx
```

---

# React Router Commands

Import:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Route Example:

```jsx
<Route path="/about" element={<About />} />
```

Link Example:

```jsx
<Link to="/about">About</Link>
```

---

# Build Application

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Common React Commands

Create Component:

```jsx
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

Import Component:

```jsx
import Home from "./pages/Home";
```

Use Component:

```jsx
<Home />
```

---

# Project Workflow

Step 1: Install Node.js

Step 2: Create React Project

```bash
npm create vite@latest project-name
```

Step 3: Move to Project

```bash
cd project-name
```

Step 4: Install Dependencies

```bash
npm install
```

Step 5: Install React Router

```bash
npm install react-router-dom
```

Step 6: Create Components and Pages

Step 7: Configure Routing

Step 8: Run Project

```bash
npm run dev
```

Step 9: Push to GitHub

```bash
git add .
git commit -m "Project Complete"
git push
```

Step 10: Build for Production

```bash
npm run build
```


```
```
```
```
# React Beginner Website

A simple React application built using Vite that demonstrates component creation, React Router navigation, and a responsive navigation bar. This project includes Home, About, Services, and Contact pages to help beginners understand React project structure and routing.

## Features

* React + Vite setup
* Component-based architecture
* Navigation Bar
* React Router DOM integration
* Home Page
* About Page
* Services Page
* Contact Page
* Responsive layout

## Prerequisites

Before running this project, install the following software:

### 1. Node.js

Download and install Node.js from:
https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

### 2. Visual Studio Code

Download and install:
https://code.visualstudio.com

### 3. Git (Optional)

Download and install:
https://git-scm.com

Verify installation:

```bash
git --version
```

## Project Setup

### Create a React Project Using Vite

```bash
npm create vite@latest react-beginner-website
```

Select:

```text
Framework: React
Variant: JavaScript
```

Move into the project folder:

```bash
cd react-beginner-website
```

Install dependencies:

```bash
npm install
```

Install React Router DOM:

```bash
npm install react-router-dom
```

## Run the Application

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── App.css
```

## React Router Setup

### main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### App.jsx

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
```

## Navigation Bar

### Navbar.jsx

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/services">Services</Link> |
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

## How Router Link Works

React Router provides the Link component.

Example:

```jsx
<Link to="/about">About</Link>
```

Explanation:

* to="/about" specifies the route path.
* Clicking the link changes the page without reloading the browser.
* React updates only the required component.
* Provides faster navigation than traditional HTML links.

## Importing Components

Example:

```jsx
import Navbar from "./components/Navbar";
```

Using the component:

```jsx
<Navbar />
```

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Author

Deepak Muduli

## License

This project is created for learning React and React Router concepts.
