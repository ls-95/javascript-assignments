const accountNameText = document.getElementById("account-name");
const accountBalance = document.getElementById("balance");

const account = {
  accountName: "Caratacus Drakoryan",
  balance: 65124750,
};
function displayInformation() {
  accountNameText.textContent = `Hello, ${account.accountName}!`;
}
displayInformation();

function handleAlert(message) {
  alert(`Hi! The service: "${message}" is currently unavailable!`);
}

let isVisible = false;
function getBalance() {
  const toggleBtn = document.getElementById("toggle-btn");
  if (isVisible) {
    accountBalance.textContent = "";
    toggleBtn.textContent = "Show Balance";
  } else {
    accountBalance.textContent = `$${account.balance}.00`;
    toggleBtn.textContent = "Hide Balance";
  }

  isVisible = !isVisible;
}
