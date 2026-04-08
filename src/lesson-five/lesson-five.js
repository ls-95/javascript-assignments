const accountNameText = document.getElementById("account-name");
const balanceSum = document.getElementById("balance");
const accountHeader = document.getElementById("account-header");
const accountBalance = document.getElementById("account-balance");
const accountActions = document.getElementById("account-actions");
const accountStatus = document.getElementById("account-status");
const loggedOutMsg = document.getElementById("logged-out-msg");
const horizontalRule = document.getElementById("horizontal-rule");
const toggleBtn = document.getElementById("toggle-btn");

const account = {
  accountName: "Caratacus Drakoryan",
  balance: 65124750,
  accountNumber: 7429 - 5831 - 6604 - 2197,
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
  if (isVisible) {
    balanceSum.textContent = "";
    toggleBtn.textContent = "Show Balance";
  } else {
    balanceSum.textContent = `$${account.balance.toFixed(2)}`;
    toggleBtn.textContent = "Hide Balance";
  }

  isVisible = !isVisible;
}

function deposit() {
  const input = prompt("How much money would you like to deposit?");
  const depositAmount = parseFloat(input);
  if (
    isNaN(depositAmount) ||
    depositAmount <= 0 ||
    input.trim() !== String(depositAmount)
  ) {
    alert("Please enter a valid amount!");
  } else if (Math.round(depositAmount * 100) / 100 !== depositAmount) {
    alert("Please enter no more than 2 decimal places!");
  } else {
    account.balance = account.balance + depositAmount;
    balanceSum.textContent = `$${account.balance.toFixed(2)}`;
    isVisible = true;
    toggleBtn.textContent = "Hide Balance";
  }
}

function withdraw() {
  const input = prompt("How much money would you like to withdraw?");
  const withdrawAmount = parseFloat(input);
  if (
    isNaN(withdrawAmount) ||
    withdrawAmount <= 0 ||
    input.trim() !== String(withdrawAmount)
  ) {
    alert("Please enter a valid amount!");
  } else if (Math.round(withdrawAmount * 100) / 100 !== withdrawAmount) {
    alert("Please enter no more than 2 decimal places!");
  } else if (withdrawAmount > account.balance) {
    alert("Insufficient funds!");
  } else {
    account.balance = account.balance - withdrawAmount;
    balanceSum.textContent = `$${account.balance.toFixed(2)}`;
    isVisible = true;
    toggleBtn.textContent = "Hide Balance";
  }
}

function exitAccount() {
  accountHeader.classList.add("hidden");
  accountBalance.classList.add("hidden");
  accountActions.classList.add("hidden");
  accountStatus.classList.add("hidden");
  horizontalRule.classList.add("hidden");
  loggedOutMsg.classList.remove("hidden");
  loggedOutMsg.classList.add("logged-out-msg");
  loggedOutMsg.textContent = "You have successfully logged out!";
}

function accountError(accountNumber, nameToCheck) {
  try {
    if (accountNumber !== account.accountNumber) {
      throw new Error("Account number not found");
    }
    const nameMatches =
      account.accountName.toLowerCase() === nameToCheck.toLowerCase();
    if (nameMatches) {
      console.log("Name matched! Access granted");
    } else {
      console.log("Name does not match. Access denied.");
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
}
accountError(account.accountNumber, account.accountName);
accountError(123445, account.accountName);
accountError(account.accountNumber, "James Dean");

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
      exitAccount();
      break;
  }
}
