const accountNameText = document.getElementById("account-name");
const accountBalance = document.getElementById("balance");

const account = {
  accountName: "Caratacus Drakoryan",
  balance: 65124750,
};

function getAccountName() {
  accountNameText.textContent = `Hello, ${account.accountName}!`;
}

function handleAlert(message) {
  alert(
    `Hi! The service: "${message}" is currently unavailable! Please try again later`,
  );
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

function deposit() {
  const depositAmount = parseFloat(
    prompt("How much money would you like to deposit?"),
  );
  account.balance = account.balance + depositAmount;
  accountBalance.textContent = `$${account.balance}.00`;
}

function withdraw() {
  const withdrawAmount = parseFloat(
    prompt("How much money would you like to withdraw?"),
  );
  account.balance = account.balance - withdrawAmount;
  accountBalance.textContent = `$${account.balance}.00`;
}

function atm(action) {
  switch (action) {
    case "balance":
      getBalance();
      break;
    case "deposit":
      deposit();
      break;
    case "withdraw":
      withdraw();
      break;
    case "account name":
      getAccountName();
      break;
    case "exit":
  }
}
