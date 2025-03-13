// ADD Money

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addMoney = document.getElementById("add-money").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;
    const addMoneyNumber = parseFloat(addMoney);
    const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    console.log(addMoneyNumber, mainBalanceNumber);

    if (addMoneyPin === "1234") {
      const newBalance = mainBalanceNumber + addMoneyNumber;
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("Wrong pin number");
    }
  });

// CASHOUT Money

document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();
  const cashoutMoney = parseFloat(
    document.getElementById("cashout-money").value
  );
  const cashoutPin = document.getElementById("cashout-pin").value;
  const mainBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );
  console.log(cashoutMoney, cashoutPin, mainBalance);
  if (cashoutPin === "1234") {
    const newBalance = mainBalance - cashoutMoney;
    document.getElementById("main-balance").innerText = newBalance;
  } else {
    alert("Wrong Pin Number");
  }
});
