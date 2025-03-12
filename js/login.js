document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);

  const digitNumber = document.getElementById("digit-number").value;
  console.log(digitNumber);
});
