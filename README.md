# 🌴 WanderLust - Hotel Booking System

## 🚀 Live Demo
👉 [WanderLust - Hotel Booking](https://hotel-booking-4azv.onrender.com/)

## 📚 Project Overview
**WanderLust** is a web-based hotel booking application designed to offer users an intuitive and seamless experience for booking hotels. It includes user authentication, hotel listing management, and secure booking features.

The project follows the **MVC (Model-View-Controller)** architecture to ensure maintainability and scalability.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Database:** MongoDB Atlas
- **Authentication:** Passport.js (Local Strategy)
- **File Uploads:** Cloudinary

---

## ✨ Features
- 🏨 **Hotel Listings:** View, filter, and search hotels with ease.
- 🔒 **User Authentication:** Secure user login, registration, and password encryption using Passport.js.
- 📅 **Booking Management:** Book hotels with real-time availability.
- 🧑‍💻 **Admin Panel:** Add, update, or delete hotel listings.
- 📧 **Email Notifications:** Booking confirmation via email.
- 📸 **Image Uploads:** Upload and manage hotel images with Cloudinary.

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Anshit-Sony/Hotel_Booking.git
cd Hotel_Booking
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file and configure environment variables
```
PORT=3000
MONGO_URI=<your-mongodb-atlas-connection-string>
SESSION_SECRET=<your-secret-key>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

### 4. Start the server
```bash
npm run dev
```

The application will run at `http://localhost:3000`

---

## 🔐 Authentication Flow
1. **Register/Login:** Users can register and log in using local authentication.
2. **Session Management:** Sessions are maintained using cookies.
3. **Authorization:** Access to booking and admin features is restricted based on roles.

---


## 🎯 Future Enhancements
- ✅ Payment gateway integration for secure transactions
- ✅ Google OAuth for social login
- ✅ Review and rating system for hotels
- ✅ Booking cancellation and modification

---

## 🤝 Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## 🧑‍💻 Author
- **Anshit Sony** - [GitHub](https://github.com/Anshit-Sony)

---
