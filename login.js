function login(event) {
  event.preventDefault();

  let l_email = document.getElementById("l_email").value;
  let l_passw = document.getElementById("l_pass").value;

  const emailPatternlog = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passPatternlog =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  if (!l_email.match(emailPatternlog || !l_passw.match(passPatternlog))) {
    alert("Email or password is not valid !!");
    return false;
  } else {
    if (localStorage.getItem(l_email)) {
      if (localStorage.getItem(l_email) != l_passw) {
        alert("Password is incorrect !");
        return false;
      } else if (localStorage.getItem(l_email) === l_passw) {
        alert("Login successful !!");
      }
    } else {
      alert("This email is not registered !!");
    }
  }
}
