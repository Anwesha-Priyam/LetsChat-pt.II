  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDVxm-Zs--YUvXg41q-b_H9WnfLSBLwSNE",
    authDomain: "c-94-project.firebaseapp.com",
    databaseURL: "https://c-94-project-default-rtdb.firebaseio.com",
    projectId: "c-94-project",
    storageBucket: "c-94-project.appspot.com",
    messagingSenderId: "23593219528",
    appId: "1:23593219528:web:10150b3e9a29f42703bcfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() 
 {
  firebase.database().ref("/").on('value', 
  function(snapshot) 
  {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) 
  {
    childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });
    });
  }
getData();