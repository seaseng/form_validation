$(document).ready(function () {

  function validate_inputs (username, password) {
    var errorMessages = [];
    // var email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
    var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var capital_word_regex = /[A-Z]/;
    var password_length_min = 8;
    var number_regex = /\d/;

    if (email_regex.test(username) === false) {
      errorMessages.push('Must be a valid email address.');
    }

    if (capital_word_regex.test(password) === false) {
      errorMessages.push('Password must have at least one capital letter.');
    }

    if (number_regex.test(password) === false) {
      errorMessages.push('Password must have at least one numeric character (0-9).');
    }

    if (password.length < password_length_min) {
      errorMessages.push('Password must have at least ' + password_length_min + ' characters.');
    }
    return errorMessages;
  }

  $('form[name="sign_up"]').on('submit', function(e) {
    e.preventDefault();
    var $username = $('form input[name="email"]');
    var $password = $('form input[name="password"]');
    var username  = $username.val();
    var password  = $password.val();
    var $body    = $(document).find('body');
    
    $(document).find('ul').remove();
    var messages = validate_inputs(username, password);
    
    if (messages.length === 0) {
      $body.append('<p>Form submitted!</p>');
    }else {
      $body.append('<ul>');
      $ul = $body.find('ul');
      for(var i = 0; i < messages.length; i++) {
        $ul.append('<li>' + messages[i] + '</li>');
      }
    }
  });

});