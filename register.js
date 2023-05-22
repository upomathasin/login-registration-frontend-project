function reg(event) {
  event.preventDefault();

  /*info from input field of registration form */
  let r_name = document.getElementById("r_name").value;
  let r_phone = document.getElementById("r_phone").value;
  let r_email = document.getElementById("r_email").value;
  let r_passw = document.getElementById("r_pass").value;
  let r_conpass = document.getElementById("r_conpass").value;

  /*RegEx for input validation */
  const namePattern = /^[a-zA-z .]+$/;
  const phnPattern = /^(\+88)?-?01[3-9]\d{8}$/;
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var validate = true;

  /* Name validation:*/
  if (r_name.length == 0) {
    document.getElementById("r_nameErr").innerHTML =
      "Empty field is not allowed !";

    validate = false;
  } else if (!r_name.match(namePattern)) {
    document.getElementById("r_nameErr").innerHTML =
      "Only Character is Allowed ";
    validate = false;
  } else if (r_name.length < 3 || r_name.length > 20) {
    document.getElementById("r_nameErr").innerHTML =
      "Length of name must be within 3-20 ";

    validate = false;
  } else {
    document.getElementById("r_nameErr").innerHTML = "";
  }

  /* Phone Number validation:*/

  if (r_phone.length == 0) {
    document.getElementById("r_phnErr").innerHTML = "Empty is not Allowed !!";
    validate = false;
  } else if (!r_phone.match(phnPattern)) {
    document.getElementById("r_phnErr").innerHTML =
      "Please Enter a valid bangladeshi mobile number!!";
    validate = false;
  } else {
    document.getElementById("r_phnErr").innerHTML = "";
  }

  /*Password Validation*/

  if (r_passw.length == 0) {
    document.getElementById("r_passErr").innerHTML =
      "Empty field is not allowed !";

    validate = false;
  } else if (!r_passw.match(passPattern)) {
    document.getElementById("r_passErr").innerHTML =
      "Password must contain at least one spacial char,one upper , lower case letter and at least one digit. (At least 8)";
    validate = false;
  } else {
    document.getElementById("r_passErr").innerHTML = "";
  }

  /* Email validation:*/

  if (r_email.length == 0) {
    document.getElementById("r_emailErr").innerHTML =
      "Empty field is not allowed !";

    validate = false;
  } else if (!r_email.match(emailPattern)) {
    document.getElementById("r_emailErr").innerHTML = "Email is not valid!";

    validate = false;
  } else {
    document.getElementById("r_emailErr").innerHTML = "";
  }

  /*Password confirmation */

  if (r_passw != r_conpass) {
    document.getElementById("r_conpassErr").innerHTML =
      "Password doesn't match !";
    validate = false;
  } else {
    document.getElementById("r_conpassErr").innerHTML = "";
  }

  console.log(validate);
  if (localStorage.getItem(r_email)) {
    alert("This email is already registered.Try another one !!");
    return false;
  } else if (validate) {
    localStorage.setItem(r_email, r_passw);
    alert("You have successfully registered !!");
  } else {
    return false;
  }
}

