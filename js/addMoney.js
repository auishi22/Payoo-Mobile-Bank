document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addMoney = getInputValueById("add-money");
    const addMoneyPin = getInputValueById("add-money-pin");
    const mainBalance = getInputTextById("main-balance");

    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    if (addMoneyPin === 1234) {
      const newBalance = mainBalance + addMoney;
      document.getElementById("main-balance").innerText = newBalance;

      const div = document.createElement("div");
      div.classList.add("bg-pink-200");
      div.innerHTML = `
        <div class='p-6 '>
          <h4 class='text-xl font-bold text-center'>Add Money</h4>
        <p>Add Money : ${addMoney} & New Balance : ${newBalance}</p>
        </div>
      `;

      document.getElementById("trans-container").appendChild(div);
    } else {
      alert("Wrong Pin Number. Plaese Try Again");
    }
  });
