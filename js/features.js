document
  .getElementById("display-cashout")
  .addEventListener("click", function () {
    // document.getElementById("cashout-form").classList.remove("hidden");
    // document.getElementById("add-money-form").classList.add("hidden");
    showSectionById('cashout-form')
  });

document
  .getElementById("display-add-money")
  .addEventListener("click", function () {
    showSectionById('add-money-form')
  });

document
  .getElementById("display-transaction")
  .addEventListener("click", function () {
    showSectionById('trans-container')
  });
