import { auth } from './firebaseConfig'; // Adjust the import path as needed

const logout = () => {
  // Sign out the user
  auth.signOut()
    .then(() => {
      console.log('User signed out successfully.');
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
};

let inactivityTimer;

const startInactivityTimer = () => {
  inactivityTimer = setTimeout(() => {
    logout();
  },  3*60*1000); // Logout after 3 minutes of inactivity
};

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  startInactivityTimer();
};

// Attach event listeners to detect user activity
window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('keydown', resetInactivityTimer);

// Start the inactivity timer when the app loads
startInactivityTimer();

window.addEventListener('beforeunload', (event) => {
  // Ensure the user is logged out before leaving the page
  logout();
  event.preventDefault();
  event.returnValue = ''; // Display a confirmation message in some browsers
});
