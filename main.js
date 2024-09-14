const characterAmountRange = document.getElementById("character-amount-range");
const characterAmountNumber = document.getElementById(
  "character-amount-number"
);
const form = document.getElementById("password-generator-form");
const includeNumbersElement = document.getElementById("include-numbers");
const includeUppercaseElement = document.getElementById("include-uppercase");
const includeSymbolsElement = document.getElementById("include-symbols");
const passwordDisplay = document.getElementById("password-display");

// Event listener for stopping submitting adn refreshing page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

const generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CHAR_CODES;
  // Checking if includes uppercase, numbers, symbols and concatenate it
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

  let passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    // Randomizing charCodes and pushing and joining
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
};

// Looping through ASCII format Character Codes
const arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// Setting ASCII Character Codes to variables
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
);

// Function for syncing both character amount range and number
const syncCharacterInputAmount = (e) => {
  console.log("isWorking?");
  const value = e.target.value;
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
};

// Event listener for number of characters
characterAmountRange.addEventListener("input", syncCharacterInputAmount);
characterAmountNumber.addEventListener("input", syncCharacterInputAmount);
