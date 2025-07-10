# IITH Complaint Website

This is a web application for students and residents of IIT Hyderabad to easily raise complaints, report issues, and provide suggestions related to hostel and campus facilities. The platform is designed to streamline the complaint process, ensure only authorized users (IITH members) can access the system, and provide a user-friendly interface for reporting and tracking issues.

## Features

- **Google Authentication**: Only users with an `@iith.ac.in` email can log in.
- **Dashboard**: Submit complaints about various hostel and campus issues.
- **Emergency Contacts**: Quick access to important helpline numbers.
- **My Issues**: View and manage your submitted complaints.
- **Report Suggestions**: Submit suggestions for improvements.
- **About Us**: Information about the website creators.

## How It Works

1. **Authentication**: Users must log in using their IITH Google account. Non-IITH emails are denied access.
2. **Complaint Submission**: After login, users can submit complaints by selecting the issue type, hostel, and providing details.
3. **Emergency Services**: Users can view and copy emergency contact numbers.
4. **View My Issues**: Users can see a list of their submitted complaints and their statuses.
5. **Suggestions**: Users can submit suggestions for improvements, which are stored in the database.
6. **Logout**: Users can securely log out of their session.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend/Database**: Firebase Authentication & Firestore
- **Notifications**: react-toastify

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/GuptaVardan/IITH_Complaints_Website.git
cd IITH_Complaint_Website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Firebase

- Go to `app/firebaseConfig.js` and ensure your Firebase project credentials are set.
- Make sure Firestore and Authentication (Google) are enabled in your Firebase console.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage Guide

### 1. Login

- On the home page, click **Sign in with Google**.
- Only IITH email addresses (`@iith.ac.in`) are allowed.

### 2. Dashboard (Submit Complaint)

- After login, you are redirected to the dashboard.
- Fill in your details, select the issue type, hostel, and describe your problem.
- Submit the form to log your complaint.

### 3. Emergency Services

- Navigate to the **Emergency Services** page from the navbar.
- View important helpline numbers.
- Click on a number to copy it to your clipboard.

### 4. My Issues

- Go to **My Issues** to see all complaints you have submitted.
- View the status of each complaint.

### 5. Report Suggestions

- Go to **Report an Issue** (footer link).
- Submit suggestions for improvements or report other issues not covered in the main dashboard.

### 6. About Us

- Visit the **About Us** page to see information about the website creators.

### 7. Logout

- Use the **Sign Out** button in the navbar to securely log out.

---

## Project Structure

- `app/` - Main application code (pages, components, context)
- `app/context/AuthContext.js` - Handles authentication logic
- `app/firebaseConfig.js` - Firebase configuration
- `app/components/` - Navbar, Footer, etc.
- `app/dashboard/` - Dashboard page for submitting complaints
- `app/emergency/` - Emergency contacts page
- `app/my_issues/` - User's submitted complaints
- `app/reportissue/` - Suggestions and other issues
- `public/` - Static assets and icons

---

## Notes

- Only IITH users can access the platform.
- All complaints and suggestions are stored in Firestore.
- The UI is responsive and works on both desktop and mobile devices.

---

## Troubleshooting

- If you face issues with authentication, ensure your Firebase project allows Google sign-in and your credentials are correct.
- For database errors, check your Firestore rules and configuration.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is for educational and internal use at IIT Hyderabad.
