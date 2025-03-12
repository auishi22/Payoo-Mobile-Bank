document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addMoney = document.getElementById("add-money").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;
    console.log(addMoney,addMoneyPin);
  });
