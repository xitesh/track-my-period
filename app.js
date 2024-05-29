 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAF6hzh5NZNO4JWs77WYsNmQBVGsGuZfzc",
    authDomain: "track-my-period.firebaseapp.com",
    projectId: "track-my-period",
    storageBucket: "track-my-period.appspot.com",
    messagingSenderId: "963629924186",
    appId: "1:963629924186:web:de3d1cfc765180b76e3d63",
    measurementId: "G-S99Z27G8WF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('google-login-btn');

    loginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                // User signed in successfully
                const user = result.user;
                console.log(user);
                // Redirect to the appropriate page after successful sign-in
                window.location.href = "https://www.example.com/dashboard"; // Replace with your desired redirect URL
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
