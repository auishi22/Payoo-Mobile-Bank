document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();
  const cashoutMoney = getInputValueById("cashout-money");
  const cashoutPin = getInputValueById("cashout-pin");
  const mainBalance = getInputTextById("main-balance");

  if (isNaN(cashoutMoney)) {
    alert("Failed to add money");
    return;
  }

  if (cashoutPin === 1234) {
    if (cashoutMoney > mainBalance) {
      alert("You do not have enough money to cashout");
      return;
    }
    const newBalance = mainBalance - cashoutMoney;
    document.getElementById("main-balance").innerText = newBalance;
    const div = document.createElement("div");
    div.classList.add("bg-pink-200");
    div.innerHTML = `
      <div class='p-6 '>
        <h4 class='text-xl font-bold'>Cash Out</h4>
      <p>${cashoutMoney} withdraw & New Balance : ${newBalance}</p>
      </div>
    `;
    document.getElementById("trans-container").appendChild(div);
  } else {
    alert("Enter wrong pin number. Please try again.");
  }
});
