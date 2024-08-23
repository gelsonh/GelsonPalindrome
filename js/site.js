// Get user input values and validate them
function getValues() {
  const userString = document.getElementById("userString").value;
  const isPalindrome = checkForPalindrome(userString);
  displayResults(isPalindrome, userString);
}

const regex = /[^a-z0-9]/gi;
const checkForPalindrome = (input) => {
  const userString = input.replaceAll(regex, "").toLowerCase();
  return userString === userString.split("").reverse().join("");
};

function displayResults(isPalindrome, input) {
  const alertBox = document.getElementById("alert");
  const h4Element = document.querySelector("h4");
  const revText = input.split("").reverse().join("");
  document.getElementById("results").textContent = revText;

  if (isPalindrome) {
    h4Element.textContent = "Well done! You entered a Palindrome!";
    alertBox.classList.add("alert-success");
  } else {
    h4Element.textContent = "Oh no! That’s not a palindrome.";
    alertBox.classList.add("alert-danger");
  }
  alertBox.classList.remove("invisible");
}
