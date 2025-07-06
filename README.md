# 👨‍👩‍👧 Familia – AI-Powered Orphan Adoption Matchmaking Backend

**Familia** is an intelligent backend service designed to streamline the orphan adoption process using AI-powered matchmaking and geolocation filters. It connects orphans with potential parents based on compatibility, location, and preferences. Built with Node.js, Firebase, and Gemini AI APIs, it makes adoption safer, smarter, and simpler.


## 🚀 Features

- 👨‍👧 Parent and Orphan registration
- 📍 Location-based filtering (within 50km)
- 🧠 AI Matching using Gemini API
- 📡 Firebase Firestore integration
- 🤖 Chatbot for interactive engagement
- 🔐 Secure API routes and data handling
- 📁 Modular codebase with separate controllers/models

## 🧱 Tech Stack

| Component     | Tech                            |
|---------------|---------------------------------|
| Runtime       | Node.js                         |
| Database      | Firebase Firestore              |
| AI/ML         | Gemini API (for smart matching) |
| Location      | Geo-distance filtering (Haversine) |
| Modules       | Express, dotenv, axios          |

## 📁 Project Structure

```
Familia/
├── controllers/            # Orphan, Parent, Match, Chatbot handlers
├── firebase/               # Firebase DB connection
├── ml/                     # AI/ML logic (geminiMatch, filters)
├── models/                 # Mongoose-style schema objects
├── .env                    # Environment configs
├── server.js               # Entry point
└── package.json
```

## ⚙️ Setup Instructions

### 📥 Clone & Install

```bash
git clone https://github.com/your-username/familia.git
cd familia
npm install
```

### 🔐 Setup `.env` File

Create a `.env` file in the root directory:

```
PORT=5000
FIREBASE_CREDENTIALS_PATH=./firebase/serviceAccount.json
GEMINI_API_KEY=your_gemini_api_key
```

Make sure to add your **Firebase service account key JSON file** to `firebase/`.

### ▶️ Run the Server

```bash
node server.js
```

API will run on: [http://localhost:5000](http://localhost:5000)

## 📘 Core APIs (Examples)

### 👩‍👧 Register Parent

**POST** `/parent/register`

| Parameter      | Type     | Description                       |
|----------------|----------|-----------------------------------|
| name           | string   | Parent name                       |
| location       | object   | Coordinates `{ lat, lng }`        |
| preferences    | object   | Adoption criteria                 |

### 🧒 Register Orphan

**POST** `/orphan/register`

| Parameter      | Type     | Description                       |
|----------------|----------|-----------------------------------|
| name           | string   | Orphan's name                     |
| age            | number   | Orphan's age                      |
| location       | object   | Coordinates `{ lat, lng }`        |

### 🤖 AI Matching

**GET** `/match/ai/:parentId`

| Parameter | Type     | Description                      |
|-----------|----------|----------------------------------|
| parentId  | string   | Parent's unique ID               |

Returns a list of top AI-matched orphans based on compatibility.


### 🧠 Gemini Match Model

Uses the **Gemini API** to:

- Compare orphan and parent profiles
- Generate match scores
- Return ranked recommendations


## 📄 License

This project is licensed under the **MIT License**.

## 🧑‍💻 Author
**Mohit Bansal**  
🔗 [GitHub](https://github.com/WorkMohit17) | 💼 [LinkedIn](https://www.linkedin.com/in/workmohit17/)

