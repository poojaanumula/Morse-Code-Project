export { translateToMorse, translateToEnglish };
const translate = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

const reverseTranslate = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "/": " ",
};
function translateToMorse(text) {
  // Validate input: only allow letters (a-z or A-Z) and spaces
  const isValid = /^[a-zA-Z\s]*$/.test(text);
  if (!isValid) {
    throw new Error(
      "Input contains unsupported characters. Only letters and spaces are allowed."
    );
  }

  // Perform translation
  return text
    .split("")
    .map((char) => translate[char.toUpperCase()] || "")
    .filter((morse) => morse !== "")
    .join(" ");
}
function translateToEnglish(morseCode) {
  // Validate input: only allow valid Morse code characters (., -, /, and spaces)
  if (!/^[.\-\/\s]+$/.test(morseCode)) {
    throw new Error(
      "Input contains unsupported characters. Only '.', '-', '/', and spaces are allowed."
    );
  }
  // Translate each Morse code sequence to English
  const translation = morseCode
    .trim()
    .split(/\s+/) // Split by spaces
    .map((code) => {
      if (!(code in reverseTranslate)) {
        throw new Error("Invalid format, please enter valid Morse code.");
      }
      return reverseTranslate[code];
    })
    .join("");

  return translation;
}
