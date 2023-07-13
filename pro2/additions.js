  // isErr
  //   ? (function () {
  //       p.innerText = "Error. this Email used";
  //       p.style.color = "white";
  //       p.style.background = "red";
  //       conteinerRegistration.append(p);
  //       email.value = "";
  //     })()
  //   : (function () {
  //       p.innerText = "Data seved";
  //       p.style.color = "white";
  //       p.style.background = "green";
  //       conteinerRegistration.append(p);
  //     })();

  // !isErr && userArr.push({
  //             usrName : name.value,
  //             usrLastName : lastName.value,
  //             usrEmail : email.value,
  //             usrPassword : password.value,
  //         });
  // !isErr && localStorage.setItem("UserData", JSON.stringify(userArr))

  // isErr ? null : (function() {
  //     userArr.push({
  //         usrName : name.value,
  //         usrLastName : lastName.value,
  //         usrEmail : email.value,
  //         usrPassword : password.value,
  //     });
  //     localStorage.setItem("UserData", JSON.stringify(userArr))
  // })()