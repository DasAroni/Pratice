const firebaseConfig = {
  apiKey: "AIzaSyDcP53-o2vhQJLOocequ8rclU_d92jCE00",
  authDomain: "kwitter-f47b4.firebaseapp.com",
  databaseURL: "https://kwitter-f47b4-default-rtdb.firebaseio.com",
  projectId: "kwitter-f47b4",
  storageBucket: "kwitter-f47b4.appspot.com",
  messagingSenderId: "471886162640",
  appId: "1:471886162640:web:dc3fca54bd18b222f54cd5",
  measurementId: "G-QKLL0RCDEC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


