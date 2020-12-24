 var firebaseConfig = {
   apiKey: "AIzaSyD_RVhk36Oq6D0-aWv7KuA32sg3hIlXTOg",
   authDomain: "kwittwit.firebaseapp.com",
   projectId: "kwittwit",
   storageBucket: "kwittwit.appspot.com",
   messagingSenderId: "601731185376",
   appId: "1:601731185376:web:a4180f33b492679454ae85"
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