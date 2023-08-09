const conteinerRegistration = document.querySelector(".conteiner-sing-up");
const conteinerLogin = document.querySelector(".conteiner-sing-in");

const name = document.querySelector(".name");
const phoneNumber = document.querySelector(".phoneNumber");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const login = document.querySelector(".login");

const passwordLogin = document.querySelector(".password-login");

const buttonRegistration = document.querySelector(".sing-up");
const buttonLogin = document.querySelector(".sing-in");

const p = document.createElement("p");

const userArr = localStorage.getItem("UserData")
  ? JSON.parse(localStorage.getItem("UserData"))
  : [];

const printMessage = (bgColor, textMessage, conteiner) => {
  p.innerText = textMessage;
  p.style.color = "white";
  p.style.background = bgColor;
  conteiner.append(p);
};

buttonRegistration.addEventListener("click", () => {
  let isErr = false;
  for (let i = 0; i < userArr.length; i++) {
    if (email.value === userArr[i]["usrEmail"]) {
      isErr = true;
      email.value = "";
    }
  }

  if (!isCheckSymbols(name.value, 3)) {
    printMessage("red", "name must be > 3 symbols", conteinerRegistration);
  } else if (!isCheckNumder(phoneNumber.value)) {
    printMessage("red", "please check number", conteinerRegistration);
  } else if (isErr) {
    printMessage("red", "this Email used", conteinerRegistration);
  } else if (
    !isCheckEmail(email.value) &&
    !!isCheckSymbols(password.value, 8)
  ) {
    printMessage("red", "please check email", conteinerRegistration);
  } else if (
    !isCheckPassword(password.value) ||
    !isCheckSymbols(password.value, 8)
  ) {
    printMessage(
      "red",
      "password must have at least 1 capital letter, 1 small letter, and 1 number, and must be at least 8",
      conteinerRegistration
    );
  } else saveUserData();
});

buttonLogin.addEventListener("click", () => {
  let isCheckLogin = false;
  let isCheckPass = false;
  for (const user of userArr) {
    if (login.value === user.usrPhoneNumber && login.value !== "") {
      isCheckLogin = true;
    } else if (login.value === user.usrEmail) {
      isCheckLogin = true;
    }

    if (isCheckLogin && passwordLogin.value === user.usrPassword) {
      isCheckPass = true;
    }
  }
  if (isCheckPass) {
    location = "index2.html";
  } else {
    printMessage(
      "red",
      "sorry. login or password is incorrect",
      conteinerLogin
    );
    passwordLogin.value = "";
    login.value = "";
  }
});

// сохранение данных пользователя
function saveUserData() {
  userArr.push({
    usrName: name.value,
    usrPhoneNumber: phoneNumber.value,
    usrEmail: email.value,
    usrPassword: password.value,
  });
  localStorage.setItem("UserData", JSON.stringify(userArr));
  printMessage("green", "Data seved", conteinerRegistration);
}
// функция которая проверяет количество введенных символов

function isCheckSymbols(input, minSymbolsNumder) {
  return input.length >= minSymbolsNumder ? true : false;
}

// функция которая проверяет номер телефона чтоб только + и цифры

function isCheckNumder(phoneNumber) {
  let firstPlus = "+";

  const index = phoneNumber[0] === firstPlus ? 1 : 0;
  for (let i = index; i < phoneNumber.length; i++) {
    if (isNaN(+phoneNumber[i])) {
      return false;
    }
  }
  return true;
}

// функция которая проверяет email на наличие @ и точки после нее

function isCheckEmail(email) {
  for (let i = 2; i < email.length; i++) {
    if (email[i] === "@") {
      // временно взял величины 4 и 3, чтоб убедится что вводится минимум 4 символа типа после @ и 2 символа после точки
      for (let d = email.length - 3; d > i + 4; d--) {
        if (email[d] === ".") {
          return true;
        }
      }
      break;
    }
  }
  return false;
}
// функция которая проверяет пароль на наличие регистров и цифр
function isCheckPassword(password) {
  let isUpper = false;
  let isLower = false;
  let isNumber = false;

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(+password[i])) isNumber = true;
    else if (password[i] === password[i].toUpperCase()) isUpper = true;
    else if (password[i] === password[i].toLowerCase()) isLower = true;
  }

  return isUpper && isLower && isNumber ? true : false;
}
