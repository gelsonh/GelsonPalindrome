function getValues() {
  let userString = document.getElementById("userString").value;

  let revString = checkForPalindrome(userString);
  displayResults(revString, userString);
}

function checkForPalindrome(input, output) {
  // Use regex to eliminate punctuation and spaces
  let userString = input.replace(/[^a-zA-Z0-9]/g, "");

  // Ignore Capitalization
  userString = userString.toLowerCase();

  // Check if is a palindrome
  return userString === userString.split("").reverse().join("");
}

function displayResults(output, input) {
  let alertBox = document.getElementById("alert");

  if (output) {
    let revText = input.split("").reverse().join("");
    let h4Element = document.querySelector("h4");
    h4Element.textContent = "Well done! You entered a Palindrome!";
    document.getElementById("results").textContent = revText;
    alertBox.classList.remove("alert-danger");
    alertBox.classList.add("alert-success");
  } else {
    let revText = input.split("").reverse().join("");
    let h4Element = document.querySelector("h4");
    h4Element.textContent = "Oh no! That’s not a palindrome.";
    document.getElementById("results").textContent = revText;
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-danger");
  }
  alertBox.classList.remove("invisible");
}
