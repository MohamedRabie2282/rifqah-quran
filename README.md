# 🕌 Rifqah Quran

**رفيقك في رحلتك مع القرآن الكريم**

منصة إلكترونية متكاملة لإدارة ومتابعة رحلة حفظ القرآن الكريم، تربط بين الطلاب والمشرفين، وتوفر أدوات لمتابعة الحفظ والتقييمات والشهادات والإشعارات.

🌐 **Live Demo:** [https://rifqah-quran.vercel.app/](https://rifqah-quran.vercel.app/)

---

## ✨ Features

* 👤 نظام تسجيل دخول وحسابات للمستخدمين
* 📖 إدارة ومتابعة حفظ القرآن الكريم
* 📝 تسجيل التقييمات والمتابعة الدورية
* 🏆 إصدار ومتابعة الشهادات
* 🔔 نظام الإشعارات
* 💬 نظام الرسائل والتواصل
* 👨‍🏫 إدارة الطلاب والمشرفين
* 📊 Dashboard لمتابعة الأداء
* 🔐 Authentication و Role-Based Access
* 📱 تصميم Responsive لجميع الأجهزة

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js
* TypeScript
* Socket.IO

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT
* bcryptjs
* Express Validator
* CORS

### Deployment

* Vercel
* Railway
* MongoDB Atlas

---

## 📁 Project Structure

rifqah-quran/
│
├── client/          # Frontend - React + Vite
│
├── server/          # Backend - Node.js + Express
│
├── .gitignore
├── README.md
└── package.json

---

## 🏗️ Architecture

Frontend
React + TypeScript
↓
REST API / Socket.IO
↓
Node.js + Express
↓
Mongoose
↓
MongoDB Atlas

---

## 🚀 Run Locally

### 1. Clone Repository

git clone [https://github.com/MohamedRabie2282/rifqah-quran.git](https://github.com/MohamedRabie2282/rifqah-quran.git)

cd rifqah-quran

### 2. Install Frontend

cd client

npm install

### 3. Start Frontend

npm run dev

### 4. Install Backend

cd ../server

npm install

### 5. Configure Environment Variables

Create a `.env` file inside the `server` folder:

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=[http://localhost:5173](http://localhost:5173)

NODE_ENV=development

PORT=4000

### 6. Start Backend

npm run dev

---

## 👥 User Roles

### 👨‍💼 Admin

* إدارة المستخدمين
* إدارة الطلاب
* متابعة النظام
* إدارة المحتوى

### 👨‍🏫 Supervisor

* متابعة الطلاب
* تسجيل التقييمات
* متابعة الحفظ
* التواصل مع الطلاب

### 👨‍🎓 Student

* متابعة الحفظ
* مشاهدة التقييمات
* متابعة التقدم
* استقبال الإشعارات
* التواصل مع المشرف

---

## 🔐 Security

* JWT Authentication
* Password Hashing باستخدام bcrypt
* Role-Based Authorization
* Input Validation
* Protected API Routes
* CORS Configuration
* Environment Variables لحماية البيانات الحساسة

---

## 🎯 Project Goals

يهدف المشروع إلى توفير تجربة رقمية سهلة ومنظمة لمتابعة حفظ القرآن الكريم، وتقليل الاعتماد على المتابعة اليدوية، مع توفير رؤية واضحة لتقدم الطالب ومستواه.

---

## 🔮 Future Improvements

* 📱 Mobile Application
* 🤖 AI-based Quran Recitation Analysis
* 🎙️ Voice Recognition
* 📈 Advanced Analytics
* 🕌 Multi-Mosque Support
* 🌍 Multi-language Support
* ☁️ Improved Cloud Infrastructure

---

## 👨‍💻 Developer

**Mohamed Rabie**

Junior Penetration Tester & Software Developer

GitHub:
[https://github.com/MohamedRabie2282](https://github.com/MohamedRabie2282)

---

## 🤝 Support

إذا أعجبك المشروع، يمكنك دعم المشروع من خلال ⭐ Star على GitHub.

---

<div align="center">

🕌 **رِفقة في رحلتك مع القرآن**

**A Companion on Your Quran Journey**

</div>
