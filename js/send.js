import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, addDoc, collection  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnRTdwCL6kACT2ftUt6SydIwkkl1M2SoE",
  authDomain: "waka-6359e.firebaseapp.com",
  databaseURL: "https://waka-6359e-default-rtdb.firebaseio.com",
  projectId: "waka-6359e",
  storageBucket: "waka-6359e.appspot.com",
  messagingSenderId: "542828308362",
  appId: "1:542828308362:web:bd49cf6153e6e3efea0a73",
  measurementId: "G-KBFK4SZLP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//set data to firestore services
document.getElementById("pariButton").addEventListener("click", function() {
  var candidateGroup = document.getElementsByName("radioCandidate");
  var candidateChecked = Array.from(candidateGroup).find(
      (radio) => radio.checked
    );
    
  const candidateData = {
      Presentation:  candidateChecked.value,
  };
  console.log(candidateData)
  setDoc(doc(db, "Miss", "concours"), candidateData);
  document.getElementById("voteDid").style.display = "block";
  document.getElementById("voteDid").innerHTML="Pari enregistré"
})
document.getElementById("zenButton").addEventListener("click", function() {
  var zenGroup = document.getElementsByName("radioZen");
  var zenChecked = Array.from(zenGroup).find(
      (radio) => radio.checked
    );
  if (zenChecked.value === "yes") {
    document.getElementById("zenDid").style.display = "block";
    document.getElementById("zenDid").innerHTML="Enregistré.Tu imagine le massacre"
  } else {
    document.getElementById("zenDid").style.display = "block";
    document.getElementById("zenDid").innerHTML="Enregistré.Tu crois en sa compassion"
  }
})