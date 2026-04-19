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
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Project Setup

- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.

# Quick comparison

| Option         | Free?              | Limits       | Ease       |
| -------------- | ------------------ | ------------ | ---------- |
| OpenAI         | ❌ (needs billing) | Very limited | ⭐⭐⭐⭐   |
| Gemini         | ✅                 | High         | ⭐⭐⭐⭐⭐ |
| Groq           | ✅                 | Medium       | ⭐⭐⭐⭐   |
| OpenRouter     | ✅                 | Varies       | ⭐⭐⭐     |
| Local (Ollama) | ✅                 | Unlimited    | ⭐⭐       |

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

# Groq

npm install groq-sdk

# 👉 Main docs:

https://console.groq.com/docs

# You can get your Groq API key from the official Groq developer platform here:

👉 https://console.groq.com/keys

# Step-by-step to get your API key

1. Go to Groq Console
   👉 https://console.groq.com/
2. Sign in
   Use Google / GitHub / email login
3. Go to API Keys
   Click “API Keys” in the left sidebar
   Or directly open: https://console.groq.com/keys
4. Create key
   Click “Create API Key”
   Give it a name like:
   movie-app
   netflixgpt
5. Copy the key

It will look like:
gsk\_**\*\***\*\***\*\***\*\***\*\***\*\***\*\***

⚠️ You will NOT be able to see it again — copy it immediately.

# What to fill here

1. Display Name
   Just give any name like:
   movie-app
   netflixgpt
   react-project
   👉 This is only for YOU (not important for code)

2. Expiration
   You selected:
   No expiration ✅ (good choice)
   👉 Keep this as-is
   🚀 Now do this

Click:
👉 Submit
🔐 After clicking Submit

You will get:
gsk_xxxxxxxxxxxxxxxxxxxxx

⚠️ IMPORTANT:
Copy it immediately
You won’t see it again
