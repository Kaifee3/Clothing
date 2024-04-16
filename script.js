document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    document.getElementById('message').innerHTML = "Username: " + username + "<br>Email: " + email + "<br>Password: " + password;
  });
  