const form = document.querySelector(".login-form");

const usernameInput = document.getElementById("username"); //id si username olan
const passwordInput = document.getElementById("password"); //id si password olan

const buttonLogin = document.querySelector(".btn-login");

//hatalari yazdirmak ICIN
const usernameError = document.querySelector("#error-username");
const passwordError = document.querySelector("#error-password");
const enterError = document.querySelector("#error-user");

//2.islem yedek
//klavye hareketine gore
//keydown basinca, keyup basip elimizi cekince
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("ENTERE DA BASILDI");
    buttonLogin.click();
  }
});
/* 
JSON dosya tanima ornegi
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
*/
//JSON.parse() JSON verisini alıp onu JavaScript objesine kulanilmaz ise string gibi dondurur JSON verisini
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log("localStoragedan", users, JSON.stringify(users[0]));
//JSON.stringfy() json verilerini string koduna cevirir

//formdaki bilgiler submit etme 1.ıslem
form.addEventListener("submit", function (e) {
  //submit edildğinde içindeki isimsiz functıon çalışacak
  // Sayfanın yenilenmesi, formun verilerinin sunucuya gönderilmesini ve işlenmesini sağlar.
  //Bu nedenle, form gönderildiğinde sayfanın yenilenmesi submit icin normal bir davranıştır.
  e.preventDefault(); //asenkron olarak devam etmesini sağlar
  // fonk.nun arka planda işlemesi ve sonucunun tamamlanması için
  //beklemeyi gerektirmeden, diğer işlemlerin devam edebilmesine
  console.log("fonksiyona girdi");

  // inputControl(usernameInput.value, passwordInput.value)
  console.log(
    "SONUC NEDIR",
    inputControl(usernameInput.value, passwordInput.value)
  );
  if (!inputControl(usernameInput.value, passwordInput.value))
    return; //inputlardan herhangi biri bos ise return ile donguden cikar
  else {
    //kullanci adi ve password girildikten sonra dogru sifre ve kullanci adi kontrolu
    //eşleştireceğimiz için tüm kullanıcıları localden alalım boş ise üye olacaz
    //json.parse() olarak js objesi olarak alacagiz
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("USERSDA NELER VAR", users);

    // Kullanıcının oturum açıp açmadığını takip eden bir değişken
    let isLoggedIn = false; 

    users.find((item, i) => {
      console.log("item", item);
      console.log("i", i);
      //Eğer kullanıcı adı ve şifre doğruysa, if bloğu içine girilir.
      if (
        item.username === usernameInput.value &&
        item.password === passwordInput.value
      ) {
        //isLoggedIn değişkeni true olarak güncellenir, bu da kullanıcının oturum açtığını gösterir.
        isLoggedIn = true; // Kullanıcı oturumu açıldı
        console.log("ARADGIN BU", item, i);
        console.log("evet kullanici adiniz=",item.username," ve sifrenizde",item.password);
        enterError.innerHTML='Hoşgelidiniz';// HTML elemanının içeriği "Hoşgeldiniz" olara
        enterError.style.cssText ="color:green; font-weight:700; text-align:center; ";
        window.location.href = "index.html";
      }
    });
    //Eğer kullanıcı adı ve şifre eşleşmesi bulunamazsa, if (!isLoggedIn) bloğu içine girilir.
    if (!isLoggedIn) {
      console.log("YANLIS");
      enterError.style.cssText =
        "color:red; font-weight:700; text-align:center; ";
    }

    /* console.log(
        'find i ogreniyoruZZZZ=>',
        users.map((item)=> {
            if (item.name==='a') {
                 item.name='eskiden a idi simdi b'
            }
            return item} )
    ) */
  }
});

function inputControl(username, password) {
  console.log("NE GELD", username, password);
  let inputIsFalse = true; //false kontrolu icin  input false mi

  if (username === "") {
    usernameError.style.color = "red";
    inputIsFalse = false; //false old. gore bu dongu devam etmeyecek false donecegi icin
    usernameInput.focus(); //input bos ise inputa focuslan
  } else usernameError.style.color = "transparent";
  if (password === "") {
    passwordError.style.color = "red";
    inputIsFalse = false; //false old. gore bu dongu devam etmeyecek false donecegi icin
    passwordInput.focus(); //password bos ise inputa focuslan
  } else passwordError.style.color = "transparent";

  return inputIsFalse;
}

//kayit ol butonu
const registerButton = document.querySelector(".btn-register");

registerButton.addEventListener("click", function () {
  //kayit ol butonuna tiklaninca
  window.location.href = "register.html"; //mevcut sayfayi terkedip urlye git
});
