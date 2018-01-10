// Initialize Firebase
var config = {
  apiKey: "AIzaSyDSwdy8QBD6nkYB8f52EtJ8MDO18pYVxJ0",
  authDomain: "socialnetwork-be86a.firebaseapp.com",
  databaseURL: "https://socialnetwork-be86a.firebaseio.com",
  projectId: "socialnetwork-be86a",
  storageBucket: "socialnetwork-be86a.appspot.com",
  messagingSenderId: "884615217617"
};
firebase.initializeApp(config);

// Uniendo Firebase register
$('#register').on('click', function (event) {
  var email = $('#email').val();
  var password = $('#pass').val();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    $(location).attr('href', 'newsfeed.html');
  });
});

//Uniendo Firebase login
$('#login').on('click', function (event) {
  var email = $('#email-register').val();
  var password = $('#pass-register').val();
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.location.href = 'newfeed.html';
  });

//   var user = firebase.auth().currentUser;
//   if (user) {
//     // User is signed in.
//     ;
//   } else {
//     // No user is signed in.
//     alert('Ingresa o regístrate');
//   }
// });



