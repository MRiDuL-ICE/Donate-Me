# 🤝 Donate Me

## Project Purpose
Donate Me is a web application designed to facilitate winter clothing donations, connecting compassionate donors with communities in need. The platform enables users to browse donation campaigns, learn about specific initiatives, and contribute directly to helping underprivileged individuals stay warm during cold seasons.

## 🌐 Live URL
[Donate Me](https://donatem3.netlify.app/)


## 🛠 Technologies Used

- React.js
- React Router
- Tailwind CSS
- Firebase Authentication
- Framer Motion (for animations)
- React Icons

## 🚀 Key Features
- User Authentication with Firebase
- Browse and Filter Donation Campaigns
- Detailed Campaign Information Pages
- Interactive Donation Submission Form
- Responsive User Dashboard
- Animated User Interface

## 📦 NPM Packages Used

### Core Dependencies
- `react`: Frontend library
- `react-router-dom`: Routing management
- `firebase`: Authentication and backend services
- `framer-motion`: Page and element animations
- `react-icons`: Icon library

### Styling
- `tailwindcss`: Utility-first CSS framework
- `postcss`: CSS transformation toolkit
- `autoprefixer`: CSS browser compatibility

### Development Tools
- `vite`: Frontend build tool
- `@vitejs/plugin-react`: React support for Vite
- `eslint`: Code quality and consistency
- `prettier`: Code formatting

### Additional Libraries
- `react-toastify`: Toast notifications
- `Sweetalert2`: Alert notification

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Firebase Account

### Installation


1. Install dependencies
```bash
   yarn install
   ```

2. Set up Firebase Configuration
   - Create a Firebase project
   - Copy your Firebase configuration
   - Create a `.env` file with the following variables:
     ```
     VITE_apiKey=
     VITE_authDomain=
     VITE_projectId=
     VITE_storageBucket=
     VITE_messagingSenderId=
     VITE_appId=
     ```

3. Run the application
```bash
   yarn dev
   ```

## 📂 Project Structure

```
src/
├── assets/
├── components/
│   └── Layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── pages/
│   ├── DonationCampaigns.jsx
│   ├── DonationDetails.jsx
│   ├── Dashboard.jsx
│   └── ...
├── provider/
│   └── AuthProvider.jsx
└── routes/
    └── Routes.jsx
```

## 🔐 Authentication

The application uses Firebase Authentication with support for:
- Email/Password login
- User profile management
- Protected routes for authenticated users

## 🎨 Design Philosophy

- Mobile-first responsive design
- Accessibility considerations
- Intuitive user experience
- Smooth, engaging animations

## 📧 Contact

Md. Abdul Wahab - abdulwahab22400@gmail.com


## 🙏 Acknowledgements

- React.js
- Tailwind CSS
- Firebase
- Framer Motion
- React Icons