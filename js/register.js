const form = document.querySelector(".register-form"); //register formu
console.log(form);

const nameInput = document.getElementById("name"); //nameInput
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const nameError = document.querySelector("#error-name"); //gatalari yazdirmak icin
const usernameError = document.querySelector("#error-username");
const passwordError = document.querySelector("#error-password");

const buttonRegister = document.querySelector(".btn-register");




/* document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //entere basinca girsin
    console.log("Enter ya bastin");
    form.submit()
    event.preventDefault()
    // buttonRegister.click();
  }
}); */


form.addEventListener("submit", function (event) {
    console.log("form submit ediliyor");
    event.preventDefault();
    /* 
    JavaScript nesnesi  syntaxa sahip/ 
    anahtar-değer çiftleri içerir, ancak anahtarlar çift tırnak içine alınmaz ve objenin kendisi süslü parantezler arasında yazılır.
    {
        name: "John",
        age: 30,
        city: "New York"
    }
    JSON dizisidir ve anahtarlar çift tırnak içinde yer almaktadır.
    {
        "name":"asd",
        "username":"123",
        "password":"zxczxc"
    }
  */
    /* console.log("name degeri =>", nameInput.value);
  console.log("password degeri =>", usernameInput.value);
  console.log("username degeri =>", passwordInput.value); */
    const newUsers = {
      name: nameInput.value,
      username: usernameInput.value,
      password: passwordInput.value,
    }; //bu js formatinda gonderirken JSON formatina cevirecez
    //JSON vs javascript farki
    /*  console.log('FORMAT kontrol',JSON.stringify(newUsers))
  console.log('FORMAT kontrol',newUsers) */ //arasindaki fark
    console.log("DEVAM EDIYOR mu");
    if (
      !inputControl(nameInput.value, usernameInput.value, passwordInput.value)
    ) {
      return;
    }
    console.log("DEVAM EDIYOR");
    //users dolu ise alir bos ise []
    let localRepo2 = JSON.parse(localStorage.getItem("users")) || [];
    //eklencek users
    /* 
  console.log("EKlenecek Users JSON ha'", JSON.stringify(newUsers)); */
  console.log("EKlenecek Users js hali ", newUsers);
    localRepo2.push(newUsers);
    localStorage.setItem("users", JSON.stringify(localRepo2));

    /* SAYFA YONLENDIRME */
    const modal = document.querySelector(".modal");
    const modalText = document.querySelector(".modal-content span");

    modal.style.display = "flex";// flex ile gorunur yapalim
    modalText.innerHTML = `merhaba <b>${nameInput.value}</b>`;
    setTimeout(() => {//2sn sonra uygulanacak kod
      console.log("ve buda 2sn sonra yazdi");
      modal.style.display = "none";//2sn sonunda none olsun tekrar
      // tarayıcının mevcut penceresini başka bir URL'ye yönlendirir.
      window.location.href = "login.html";//ve 2sn sonunda login gitsin
    }, 2000);
  });

/* const a = 0>1 || 1 //dogru ise 1 yanlis ise kendi
console.log('|| OGRENIYORUZ', a)
const b = 0>1 && 1 //dogru ise 1 yanlis ise false
console.log('&& OGRENIYORUZ', b) */

function inputControl(name, username, password) {
  console.log("inputControl CAGRILDI ve gelen name", name);
  console.log("inputControl CAGRILDI ve gelen name", username);
  console.log("inputControl CAGRILDI ve gelen userInput", password);
  let inputIsFalse = true; //false kontrolu icin  input false mi
  if (name === "") {
    //false mu sayaci
    nameError.style.color = "red";
    inputIsFalse = false;
    nameInput.focus()//nameInput a focuslanacak
  } else nameError.style.color = "transparent";
  if (username === "") {
    //false mu sayaci
    usernameError.style.color = "red";
    inputIsFalse = false;
    usernameInput.focus()//usernameInput a focuslanacak
  } else usernameError.style.color = "transparent";
  if (password === "") {
    //false mu sayaci
    passwordError.style.color = "red";
    inputIsFalse = false; //false degilse
    passwordInput.focus()//passwordInput a focuslanacak
  } else passwordError.style.color = "transparent";
  console.log(
    "inputIsFalse mu",
    inputIsFalse,
    "false ise tamamdir forma gidebilirsin"
  );
  return inputIsFalse;
}



document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.submit();
  }
});