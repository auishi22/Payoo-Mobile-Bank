document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);

  const digitNumber = document.getElementById("digit-number").value;
  console.log(digitNumber);

  if (phoneNumber === "5" && digitNumber === "1234") {
    console.log("You are logged in");
    window.location.href='/home.html'
  } else {
    alert("enter wrong phone number or pin number. please try again");
  }
});
