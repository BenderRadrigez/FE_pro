const nameInpt = document.querySelector(".name");
const lastnameInpt = document.querySelector(".lastname");
const emailInpt = document.querySelector(".email");
const phoneInpt = document.querySelector(".phonenumber");
const passwordInpt = document.querySelector(".password");
const saveBnt = document.querySelector(".savedata");
const body = document.querySelector("body");

saveBnt.addEventListener("click", () => {
    const userInfo = {
        name : nameInpt.value,
        lastName : lastnameInpt.value,
        email : emailInpt.value,
        phoneNumber : phoneInpt.value,
        password : passwordInpt.value
    }
    const card = document.createElement("div");
    body.appendChild(card);

    // const arrUserInfo = Object.values(userInfo);
    // const arrValues = Object.keys(userInfo);
    const arrAllInfo = Object.entries(userInfo);
    console.log(arrAllInfo);


    for(let i = 0; i < arrAllInfo.length; i++){
        let p = document.createElement("p");
        p.textContent = `${arrAllInfo[i][0]}: ${arrAllInfo[i][1]}`;
        card.appendChild(p);
    }

    
    
    // p.textContent = `Last Name: ${userInfo["lastName"]}`;
    // p.textContent= `Email: ${userInfo["email"]}`;
    // p.textContent= `Phone Number: ${userInfo["phoneNumber"]}`;
    // p.textContent= `Password: ${userInfo["password"]}`;
})
