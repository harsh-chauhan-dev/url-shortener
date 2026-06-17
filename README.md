# 🔗 URL Shortener

A modern URL shortening service inspired by Bitly that allows users to convert long URLs into short, shareable links. The application also tracks visit analytics, including click counts and timestamps.


![Image](<client/src/assets/Screenshot 2026-06-17 123242.png>)

## 🚀 Features

### Core Features

* Generate short URLs from long URLs
* Redirect users to the original URL
* Unique short ID generation using NanoID
* Store URLs in MongoDB
* Track visit history and click analytics
* Copy shortened URLs to clipboard

### Analytics

* Total click count
* Visit history tracking
* Timestamp logging for each visit

### Frontend

* Clean and responsive UI
* Modern glassmorphism design
* Smooth animations and transitions
* Real-time API integration with Axios

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Utilities

* NanoID

---

## 📂 Project Structure

```bash
URL-Shortener/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db_config.js
│   │
│   ├── controller/
│   │   └── urlController.js
│   │
│   ├── model/
│   │   └── url.model.js
│   │
│   ├── router/
│   │   └── routerURL.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ API Endpoints

### Generate Short URL

```http
POST /api/shorten
```

#### Request Body

```json
{
  "url": "https://example.com"
}
```

#### Response

```json
{
  "success": true,
  "shortUrl": "http://localhost:5000/api/abc12345"
}
```

---

### Redirect URL

```http
GET /api/:shortnerId
```

#### Example

```http
GET /api/abc12345
```

The user is automatically redirected to the original URL.

---

### Get Analytics

```http
GET /api/analytics/:shortnerId
```

#### Response

```json
{
  "success": true,
  "totalClicks": 5,
  "visitHistory": [
    {
      "timestamp": 1781678076763
    }
  ]
}
```

---

## 🗄️ Database Schema

```javascript
{
  shortnerId: String,
  redirectURL: String,
  visitHistory: [
    {
      timestamp: Number
    }
  ]
}
```

---

## 🖥️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd URL-Shortener
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🌟 Future Enhancements

* User Authentication
* Custom URL Aliases
* QR Code Generation
* URL Expiration
* Dashboard Analytics
* Deployment Support
* Rate Limiting
* URL Validation

---

## 📸 Screenshots

Add project screenshots here after deployment.

---

## 🎯 Learning Outcomes

This project helped strengthen knowledge of:

* REST API Development
* Express.js Routing
* MongoDB & Mongoose
* React State Management
* Axios API Integration
* URL Redirection
* Analytics Tracking
* Full Stack Application Development

---

## 👨‍💻 Author

**Harsh Chauhan**

Aspiring Backend Engineer focused on building scalable web applications and mastering Computer Science fundamentals.
