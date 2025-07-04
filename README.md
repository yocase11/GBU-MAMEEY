
# 🎭 MoodHobby – Your Mood-Based Hobby Recommendation App

![MoodHobby Banner](https://via.placeholder.com/1200x400?text=MoodHobby+-+Hackathon+Project)

> *Built with 💖 by Team Yogesh, Tarun, Sandhya, and Rakshana*

---

## 🌟 Overview

**MoodHobby** is a full-stack web application that helps users discover fun, relaxing, or creative hobbies based on their current mood. Whether you're feeling **happy, anxious, sad, excited, or bored**, MoodHobby provides curated suggestions, a spinning hobby wheel, and even a secret 3D Easter egg for curious users.

---

## 🚀 Live Demo

🌐 **Frontend**: [https://moodhobby.vercel.app](https://moodhobby.vercel.app)  
🛠 **Backend**: [https://moodhobby-api.onrender.com](https://moodhobby-api.onrender.com)

---

## 🧠 Key Features

- 🎡 **Spin the Wheel** – Playful way to discover a hobby when you're bored.
- 🧠 **AI Mood Detection** – Analyze user-written text to detect mood using sentiment analysis.
- 🪄 **3D Easter Egg Page** – Star Wars-inspired secret page for curious users.
- 🔐 **Login/Signup Flow** – Basic in-memory authentication.
- 🎨 **Mood-Based Hobby Pages** – Suggestions for every mood: Happy, Sad, Excited, Anxious, Bored.
- 🧩 **Mini Games** – Small fun games to uplift your spirits.
- 📸 **Camera & Journal Access** – Engage users with webcam, journaling, and external tools.

---

## 💻 Tech Stack

| Frontend | Backend | AI / Extras |
|----------|---------|-------------|
| React.js + Tailwind CSS | Node.js + Express | Sentiment Analysis (sentim API) |
| React Router | CORS + JSON Middleware | react-custom-roulette |
| react-three/fiber | In-memory auth | Starfield 3D Canvas |

---

## 🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/moodhobby.git
cd moodhobby
```

### 2. Start Frontend

```bash
cd mood-hobby-client
npm install
npm start
```

### 3. Start Backend

```bash
cd mood-hobby-backend
npm install
node index.js
```

Make sure the backend is running on `http://localhost:5000` and the frontend on `http://localhost:3000`.

---

## 🧠 AI Mood Detection

- Uses a free sentiment analysis API to classify user-written feelings like:
  - *"I feel overwhelmed..." → Anxious*
  - *"I'm so excited for the weekend!" → Excited*
  - *"Not sure what to do..." → Bored*

---

## 🎁 Easter Egg

Click the **magic wand icon** 🪄 on the homepage to unlock a **secret 3D starfield** with animated text – a tribute to exploration and curiosity.

---

## 👨‍💻 Authors

Team **Yogesh, Tarun, Sandhya, Rakshana**  
Made with 💡 at [Your Hackathon Name]

---

## 📜 License

MIT License – free to use and extend.

---

## 🙌 Acknowledgements

- [react-custom-roulette](https://github.com/react-custom-roulette/react-custom-roulette)
- [sentim API](https://sentim-api.herokuapp.com/)
- [Sketchpad](https://sketch.io/sketchpad/)
- [Three.js](https://threejs.org/)
- [Noisli](https://www.noisli.com/)
- [Wattpad](https://www.wattpad.com/)
