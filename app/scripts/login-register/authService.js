var app = angular.module('pingPong');

app.service('authService', function($firebase, FBURL){
  var ref = new Firebase(FBURL);
  this.cachedUser = ref.getAuth();

  var formatEmailForFirebase =  function(email){
    var key = email.replace('@', '^');
    if(key.indexOf('.') !== -1){
      return key.split('.').join('*');
    }
    return key;
  };

  var addNewUserToFB = function(newUser){
    var key = formatEmailForFirebase(newUser.email);
    ref.child('user').child(key).set(newUser);
  };

  this.isLoggedIn = function(){
    return !!ref.getAuth();
  };

  this.getUser = function(){
    return this.cachedUser || ref.getAuth();
  };

  this.createUser = function(user, cb) {
    ref.createUser(user, function(err, authData) {
      //console.log(authData)
      if (err) {
        switch (err.code) {
          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
            break;
          default:
            alert("Error creating user:", err);
        }
      } else {
          this.loginWithPW(user, function(authData){
            addNewUserToFB({
              name: user.name,
              email: user.email,
              uid: authData.uid,
              token: authData.token
            }, cb);
          });
      }
    }.bind(this));
  };

  this.loginWithPW = function(userObj, cb, cbOnRegister){
    ref.authWithPassword(userObj, function(err, authData){
      if(err){
        alert('The specified user does not exist.');
        cbOnRegister && cbOnRegister(false);
      } else {
        authData.email = userObj.email;
        this.cachedUser = authData;
        cb(authData);
        cbOnRegister && cbOnRegister(true);
      }
    }.bind(this));
  };

  this.logout = function(){
    ref.unauth();
    this.cachedUser = null;
    return true;
  };
});
