
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0KHtmZ9jVl_67Zk7XaMcGbmxypagUPFc",
      authDomain: "rid-s-chat-apper.firebaseapp.com",
      databaseURL: "https://rid-s-chat-apper-default-rtdb.firebaseio.com",
      projectId: "rid-s-chat-apper",
      storageBucket: "rid-s-chat-apper.appspot.com",
      messagingSenderId: "60916336100",
      appId: "1:60916336100:web:ac1fdf7f11d52aa2a033f1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user")
    document.getElementById("user_n").innerHTML="Welcome "+user_name+"!"

    function logout() {
          localStorage.removeItem("user")
          localStorage.removeItem("room_name")
          window.location="index.html"
    }

    function addroom() {
      addroomer = document.getElementById("Add_room").value;

      firebase.database().ref("/").child(addroomer).update({
            purp : "Da-juker"
      })
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("ouput").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id='"+Room_names+"onclick='chat_page(this.id)'>"+Room_names+"</div><br>"
      document.getElementById("ouput").innerHTML+=row
      //End code
      });});}
      getData();


function chat_page(name) {
       console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html"; 
      }