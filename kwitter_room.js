
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAhp1d2gQycN19v9DyPCxkpNI-osVQ3LRk",
      authDomain: "rid-s-chat-app.firebaseapp.com",
      databaseURL: "https://rid-s-chat-app-default-rtdb.firebaseio.com",
      projectId: "rid-s-chat-app",
      storageBucket: "rid-s-chat-app.appspot.com",
      messagingSenderId: "277978332781",
      appId: "1:277978332781:web:34fe1b3da2db7433208964"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user")
    document.getElementById("user_").innerHTML="Welcome "+user_name+"!"

    function logout() {
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

function addroom() {
      addrooms = document.getElementById("Add_room").value;

      firebase.database().ref("/").child(addrooms).update({
            purp : "Da_Juker_Imperiumus"
      })
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id='"+Room_names+"onclick='chat_page(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function chat_page(name) {
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
     }