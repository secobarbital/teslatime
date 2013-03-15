$(function() {
  var form;
  if ($('a[href="/login"]')) {
    $('<form action="/login" method="post">')
      .append('<label for="user_session_email">Email</label>')
      .append('<input name="user_session[email]" id="user_session_email" type="text">')
      .append('<label for="user_session_password">Password</label>')
      .append('<input name="user_session[password]" id="user_session_password" type="password">')
      .append('<input type="submit">')
      .appendTo(document.body)
  }
});
