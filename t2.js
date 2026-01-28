// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔹 Firebase configuration (replace with YOUR config)
const firebaseConfig = {
  apiKey: "AIzaSyDAVIDlPVXwqtAcbK2FJyGppkK54e155sE",
  authDomain: "data-storee.firebaseapp.com",
  databaseURL: "https://data-storee-default-rtdb.firebaseio.com",
  projectId: "data-storee",
  storageBucket: "data-storee.firebasestorage.app",
  messagingSenderId: "574860924786",
  appId: "1:574860924786:web:1483615b832a3b00b1afeb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form submit
document.querySelector(".footer button").addEventListener("click", function (e) {
  e.preventDefault();

  // Get values
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

  const hobbies = [];
  if (document.getElementById("music").checked) hobbies.push("Music");
  if (document.getElementById("sports").checked) hobbies.push("Sports");
  if (document.getElementById("travel").checked) hobbies.push("Travel");
  if (document.getElementById("movies").checked) hobbies.push("Movies");

  const incomeRange = document.getElementById("range").value;
  const age = document.getElementById("number").value;
  const bio = document.querySelector("textarea").value;

  // Send data to Firebase


  
  push(ref(database, "users"), {       
    firstName: fname,
    lastName: lname,
    email: email,
    password: password,
    gender: gender,
    hobbies: hobbies,
    income: incomeRange,
    age: age,
    bio: bio
  })
  .then(() => {
    alert("Data saved successfully");
    document.getElementById("form").reset();
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });
});



