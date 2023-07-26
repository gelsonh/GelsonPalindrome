

function getValues() {
  let userString = document.getElementById("userString").value;
  let isPalindrome = checkForPalindrome(userString);
  displayResults(isPalindrome, userString);
}

function checkForPalindrome(input) {
  let userString = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return userString === userString.split("").reverse().join("");
}

function displayResults(isPalindrome, input) {
  let alertBox = document.getElementById("alert");
  let h4Element = document.querySelector("h4");
  let revText = input.split("").reverse().join("");
  document.getElementById("results").textContent = revText;

  if (isPalindrome) {
    h4Element.textContent = "Well done! You entered a Palindrome!";
    alertBox.classList.remove("alert-danger");
    alertBox.classList.add("alert-success");
  } else {
    h4Element.textContent = "Oh no! That’s not a palindrome.";
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-danger");
  }
  alertBox.classList.remove("invisible");
}
