"use strict";

const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

const btnEncrypt = document.getElementById("enc-btn");
const btnDecrypt = document.getElementById("dec-btn");
const inputMessage = document.getElementById("messageInput");
const cipherMethodSelect = document.getElementById("cipherMethod");
const messageResult = document.getElementById("messageResult");

//////////////////////////////////////////////////////////////////
//Сaesar

const caesarShift = 3;
function caesarEncrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = alphabet.indexOf(char);
    if (index === -1) {
      result += char;
    } else {
      const newIndex = (index + shift) % alphabet.length;
      result += alphabet[newIndex];
    }
  }
  return result;
}

function caesarDecrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = alphabet.indexOf(char);
    if (index === -1) {
      result += char;
    } else {
      let newIndex = index - shift;
      if (newIndex < 0) newIndex += alphabet.length;
      result += alphabet[newIndex];
    }
  }
  return result;
}

//////////////////////////////////////////////////////////////////
//Rerverse
function reverseEncrypt(text) {
  return text.split("").reverse().join("");
}
function reverseDecrypt(text) {
  return text.split("").reverse().join("");
}

//////////////////////////////////////////////////////////////////
//Substitution
const shuffledAlphabet =
  "BzLl!-_Uj$&M:C2>3c5Y%1m*Vg+GQaiK8XtZ,./<n@N0Wf6s7TJpOow'=IyvF?REbdqHS9#(4xePAkrDhu)|";

function substitutionEncrypt(text) {
  let result = "";
  for (let char of text) {
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      result += shuffledAlphabet[index];
    } else {
      result += char;
    }
  }
  return result;
}

function substitutionDecrypt(text) {
  let result = "";
  for (let char of text) {
    const index = shuffledAlphabet.indexOf(char);
    if (index !== -1) {
      result += alphabet[index];
    } else {
      result += char;
    }
  }
  return result;
}

//////////////////////////////////////////////////////////////////
//Atbash
const reversedAlphabet = alphabet.split("").reverse().join("");

function atbashEncrypt(text) {
  let encrypted = "";
  for (let char of text) {
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      encrypted += reversedAlphabet[index];
    } else {
      encrypted += char;
    }
  }
  return encrypted;
}

function atbashDecrypt(encryptedText) {
  return atbashEncrypt(encryptedText);
}

//////////////////////////////////////////////////////////////////
//Vigenere
const key = "MysticCode";

function vignereEncrypt(text) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const keyChar = key[i % key.length];

    if (alphabet.includes(textChar) && alphabet.includes(keyChar)) {
      const textIndex = alphabet.indexOf(textChar);
      const keyIndex = alphabet.indexOf(keyChar);

      encrypted += alphabet[(textIndex + keyIndex) % alphabet.length];
    } else {
      encrypted += textChar;
    }
  }
  return encrypted;
}

function vignereDecrypt(encryptedText) {
  let decrypted = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const textChar = encryptedText[i];
    const keyChar = key[i % key.length];

    if (alphabet.includes(textChar) && alphabet.includes(keyChar)) {
      const textIndex = alphabet.indexOf(textChar);
      const keyIndex = alphabet.indexOf(keyChar);

      decrypted +=
        alphabet[(textIndex - keyIndex + alphabet.length) % alphabet.length];
    } else {
      decrypted += textChar;
    }
  }
  return decrypted;
}

///////////////////////////
//add events listeners
btnEncrypt.addEventListener("click", function () {
  const method = cipherMethodSelect.value; // отримуємо вибраний метод
  let result = "";

  switch (method) {
    case "caesar":
      result = caesarEncrypt(inputMessage.value, caesarShift);
      break;
    case "reverse":
      result = reverseEncrypt(inputMessage.value);
      break;
    case "substitution":
      result = substitutionEncrypt(inputMessage.value);
      break;
    case "atbash":
      result = atbashEncrypt(inputMessage.value);
      break;
    case "vigenere":
      result = vignereEncrypt(inputMessage.value);
      break;
    default:
      break;
  }

  messageResult.value = result; // виводимо результат
});

btnDecrypt.addEventListener("click", function () {
  const method = cipherMethodSelect.value;
  let result = "";

  switch (method) {
    case "caesar":
      result = caesarDecrypt(inputMessage.value, caesarShift);
      break;
    case "reverse":
      result = reverseDecrypt(inputMessage.value);
      break;
    case "substitution":
      result = substitutionDecrypt(inputMessage.value);
      break;
    case "atbash":
      result = atbashDecrypt(inputMessage.value);
      break;
    case "vigenere":
      result = vignereDecrypt(inputMessage.value);
      break;
    default:
      break;
  }

  messageResult.value = result; // виводимо результат
});
