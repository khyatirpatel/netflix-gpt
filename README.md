# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API

# Features

- Login/Sign Up
  - Sign In/Sign up form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Title & Description
    - MovieSuggetions
      - Movie List \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# git repo

git remote add origin https://github.com/khyatirpatel/netflix-gpt.git
git branch -M main
git push -u origin main
git add .
git commit -m "initial commit"
git push -u origin main

| Method                 | Behavior             |
| ---------------------- | -------------------- |
| `window.location.href` | Reloads page 🔄      |
| `navigate()`           | Smooth navigation ⚡ |
