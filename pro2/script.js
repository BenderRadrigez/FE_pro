const conteinerRegistration = document.querySelector(".conteiner-sing-up");
const conteinerLogin = document.querySelector(".conteiner-sing-in");

const name = document.querySelector(".name");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const emailLogin = document.querySelector(".email-login");
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

  !isErr
    ? userArr.push({
        usrName: name.value,
        usrLastName: lastName.value,
        usrEmail: email.value,
        usrPassword: password.value,
      })
    : null;
  !isErr ? localStorage.setItem("UserData", JSON.stringify(userArr)) : null;
  isErr
    ? printMessage("red", "Error. this Email used", conteinerRegistration)
    : printMessage("green", "Data seved", conteinerRegistration);
});

buttonLogin.addEventListener("click", () => {
  for (let i = 0; i < userArr.length; i++) {
    if (emailLogin.value === userArr[i]["usrEmail"] && passwordLogin.value === userArr[i]["usrPassword"]) {
        location="index2.html";
    }else{
      printMessage("red", "sorry. email or password is incorrect", conteinerLogin);
      passwordLogin.value = "";
      emailLogin.value = "";
    }
  }
});
