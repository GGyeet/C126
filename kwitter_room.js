
const firebaseConfig = {
    apiKey: "AIzaSyBDuEOHfdz7cz1ikdv6qgj4mFkLIPSzpsk",
    authDomain: "fake-class-test.firebaseapp.com",
    databaseURL: "https://fake-class-test-default-rtdb.firebaseio.com",
    projectId: "fake-class-test",
    storageBucket: "fake-class-test.appspot.com",
    messagingSenderId: "649716666788",
    appId: "1:649716666788:web:40e41b2d40d88c1a1fb131",
    measurementId: "G-1CKMZ2MCVY"
  };  
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
