document.getElementById("myForm").addEventListener("submit", validate);

function validate(e) {
  // to prevent the default behaviour of form submission

  e.preventDefault();
  let myname = document.getElementById("name").value;
  let myemail = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let confirmPassword = document.getElementById("cnfpsw").value;

  console.log(myname, myemail, password, confirmPassword);

  if (
    myname == "" ||
    myemail == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    alert("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Password does not match");
    return false;
  }

  alert("Form Submitted Successfully");
}
