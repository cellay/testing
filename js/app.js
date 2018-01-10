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

var user = null;

// Uniendo Firebase register
$('#register').on('click', function (event) {
  console.log('hey');
  var email = $('#email').val();
  var password = $('#pass').val();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    
  });
});

//Uniendo Firebase login
$('#login').on('click', function (event) {
  console.log('hey2');
  var email = $('#email-register').val();
  var password = $('#pass-register').val();
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    $(location).attr('href', 'views/newsfeed.html');
  }); 

});

function login(event) {
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    ;
  } else {
    // No user is signed in.
    alert('Ingresa o regístrate');
  }
};

// Inicio de sesión con Google y Facebook

$('#login-fb').on('click', function(event) {
  console.log('KHE?');
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    // ...
    $(location).attr('href', 'views/newsfeed.html'); //Direccionamos a la view de newsfeed

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});

$('#login-google').on('click', function(event) {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    // ...
    $(location).attr('href', 'views/newsfeed.html'); //Direccionamos a la view de newsfeed
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});


