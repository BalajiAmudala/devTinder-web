
# 📘 README for *Frontend Repo*
## *DevTinder Web*

⁠ md
# DevTinder Web – React Frontend Application

DevTinder Web is a **React-based frontend application** built to demonstrate modern UI development and integration with backend APIs.

The project focuses on reusable component design, responsive layouts, and consuming backend services to build data-driven user interfaces.

---

## 🚀 Tech Stack
- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Axios / Fetch API**
- **Responsive Design**

---

## 📌 Features
- Reusable and modular React components
- Responsive UI for different screen sizes
- API integration with backend services
- Asynchronous data fetching and state updates
- Error handling for API responses
- Clean and maintainable component structure

---

## 🔗 Backend Integration
This frontend application is integrated with a Node.js backend:  
👉 **NamasteNode** – https://github.com/BalajiAmudala/NamasteNode

The backend provides REST APIs for data operations used by this React app.

---

## 🛠️ How to Run Locally

1. Clone the repository
 ⁠bash
git clone https://github.com/BalajiAmudala/devTinder-web.git
cd devTinder-web


Development steps : 

# Devtinder

- used Vite bundler
- Using TailwindCss for styling
- using daisyUI for Faster, cleaner ,easier Tailwind CSS development
- using react-router for routing

# Login page steps

- using axios for fetching data
- use CORS as middleware in backend code , with configurations : origin, credentials : true
- from frontend whenever you're making API call ,then pass the axios with configuration => {withCredentials : true }

- using react-redux toolkit for state management
- implemented secured routing,if unauthorised user(!token) , redirect him to login page
- built logout feature and invalid creds error handling dynamically
- get the feed and add the feed in the store
- build the user card on feed
- Edit profile feature
- show toast message on save profile
- New page - see all my connections
- New page - see all my connections Requests
- Feature - Accept/Reject connection request
- send/Ignore the user card from the feed
- signUp Newuser
- E2E Testing.

  Thanks!
