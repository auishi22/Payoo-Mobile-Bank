function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);

  return inputValue;
}

function getInputTextById(id) {
  const inputText = parseFloat(document.getElementById(id).innerText);

  return inputText;
}

function showSectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cashout-form").classList.add("hidden");
  document.getElementById("trans-container").classList.add("hidden");

  // show the section which section id id provided
  document.getElementById(id).classList.remove("hidden");
}
