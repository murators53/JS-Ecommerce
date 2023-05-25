const openOffcanvas = document.querySelector(".open-offcanvas"); //icon olan
const closeOffcanvas = document.querySelector(".close-offcanvas"); //icon olan

const offcanvasMenu = document.querySelector(".offcanvas"); //icon olan
openOffcanvas.addEventListener("click", function () {
  //open-offcanvas acma butonuna tiklaninca
  console.log("OPEN ICONA TIKLANDI");
  offcanvasMenu.style.cssText = "left:0%; transition: ease .7s";
});
closeOffcanvas.addEventListener("click", function () {
  //open-offcanvas acma butonuna tiklaninca
  console.log("CLOSE ICONA TIKLANDI");
  offcanvasMenu.style.cssText = "left:-100%; transition: ease .7s";
});

//offCANVASmenu icindeki a etiketi icindeki i iconu icin sadece
const offCanvasSubmenuIcon = document.querySelector(".offcanvas-middle a i"); //icon olan
const offCanvasSubmenu = document.querySelector(".submenu"); //acilacak olan submenu
console.log("offCanvasSubmenu", offCanvasSubmenu);
//offcanvas içindeki submenu ıconuna tıklanınca
offCanvasSubmenuIcon.addEventListener("click", function () {
  console.log("OFFVANCAS ICINDEKI ICONA TIKLANDI");
  if (offCanvasSubmenu.style.display === "flex") {
    offCanvasSubmenu.style.display = "none";
  } else {
    offCanvasSubmenu.style.display = "flex";
  }
});

//Hedaermain menu icin acacagimiz icon
const openMainmenuIcon = document.querySelector(".for-mainmenu .fa-bars");
//tiklaninca aciklacak olan mainmenu
const openMainmenu = document.querySelector(".for-mainmenu .mainmenu");
//Header-main classi içindeki mainmenu ıconuna tıklanınca
openMainmenuIcon.addEventListener("click", function () {
  console.log("openMainmenu ICINDEKI ICONA TIKLANDI");
  if (openMainmenu.style.display === "flex") {
    openMainmenu.style.display = "none";
  } else {
    openMainmenu.style.display = "flex";
  }
});

//for-mainmenus-side deki ok iconu
const forMainmenusSideIcon = document.querySelector(
  ".for-mainmenus-side .fa-arrow-right"
);
//icon uzerine gelince acilacak olan mainmenus-side classi
const mainmenusSide = document.querySelector(
  ".for-mainmenus-side .fa-arrow-right"
);

//for-mainmenus-side deki sağ ok iconunun uzerine gelince
forMainmenusSideIcon.addEventListener("click", function () {
  console.log("openMainmenu ICINDEKI ICONA TIKLANDI");
  if (openMainmenu.style.display === "flex") {
    openMainmenu.style.display = "none";
  } else {
    openMainmenu.style.display = "flex";
  }
});

/* SLIDER BASLATMAK ICIN JS KODLARI  */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

/* CARTI KAPATma acma */
//cart icindeki kapatma iconu
const cartIcon = document.querySelector(".open-cart");
const cartPanel = document.querySelector(".mycart");
cartIcon.addEventListener("mouseenter", function () {
  //üzerine fare imleci mouseenter olayı gerçekleştiğinde,
  cartPanel.style.display = "flex";
});

cartPanel.addEventListener("mouseleave", function () {
  //üzerinden fare imleci mouseleave ile ayildiginda olayı gerçekleştiğinde,
  cartPanel.style.display = "none";
});

// API'den verileri alın
const productCardLeft = document.querySelector(".product-card-left");
productCardLeft.innerHTML = `<img height='70' src="https://img.icons8.com/?size=1x&id=RnQwNiHnJRvf&format=gif" alt="">`;

// Ürün verilerini tutacak değişken
let products = [];
/* 
-status: HTTP yanıtının durum kodunu gösterir. 
Örneğin, 200 OK durumu başarılı bir yanıtı, 
404 Not Found durumu kaynak bulunamadığını ifade eder.
-ok: Boolean değeri, yanıtın başarılı olup olmadığını gösterir. true ise yanıt başarılıdır (2xx veya 3xx durum kodları), false ise başarısızdır (diğer durum kodları).
-headers: Yanıtın başlıklarını içeren Headers nesnesidir. Başlıklar, sunucudan gelen yanıtla ilgili ek bilgiler içerebilir.
-url: İstek yapılan URL'yi gösterir.
-body: Yanıtın gövdesini temsil eden bir ReadableStream veya null değeri olabilir.
-bodyUsed: Boolean değeri, yanıtın gövdesinin kullanılıp kullanılmadığını gösterir. false ise henüz kullanılmamıştır.
*/
/* PROMISE anlatimi
[[PromiseState]] kısmı, Promise'nin durumunu belirtir ve 
    "fulfilled" durumunda olduğunu gösterir. Bu, Promise'in başarıyla tamamlandığı anlamına gelir.
[[PromiseResult]] kısmı, Promise'in sonucunu temsil eder. 
*/

// Ürün verilerini API'den alın ve sayfada göster
fetch("https://fakestoreapi.com/products")
  //response.json() yöntemi bir Promise döndürür,
  //bu nedenle bu ifade, JSON dönüşümünün tamamlanmasını
  // beklemek üzere zincire bir .then() ekler.
  .then((response) => response.json()) //response olunca yukarda anlattik
  .then((data) => {
    //artik js tarzina donustu
    console.log(data);
    products = data; //tum datalari atadik productsa
    //showProductCards funct.nuna products'i  gonderdik
    showProductCards(products);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

// Ürün kartlarını gösteren fonksiyon
function showProductCards(products) {
  // İlk olarak, cardsHtml değişkeni boş bir dize olarak tanımlanır.
  let cardsHtml = "";

  if (!products.length) {
    //products dizisi boş ise
    cardsHtml = "<p>Ürün Bulunamadı</p>"; // "Ürün Bulunamadı"  donduruur
  } else {
    // tum VERILERI BU FOREACH ile  kartlar şeklinde dönüştür ve HTML'e ekler
    products.forEach((product) => {
      //forEach döngüsü kullanılarak her bir ürün için bir kart oluşturulur.
      //ve hazir karti burdan alip değişkenleri atıyoruz
      const cardHtml = `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <div class="card-rate">
            <i class="fa-solid fa-star"></i>
            <span>(${product.rating.rate})</span>
        </div>
        <h3>${product.title}</h3>
        <div class="card-process">
            <i class="fa-solid fa-heart"></i>
            <button onclick=addProduct(${product.id})>$${product.price}</button>
        </div>
      </div>
      `;
      // satırı, her bir ürün için oluşturulan kart HTML'inin cardsHtml değişkenine eklenmesini sağlar.
      cardsHtml += cardHtml; //cardsHtml= cardsHtml + cardHtml;
      //+= ile birlestirilir
    });
  }
  //yukarida gifti simdi cardsHtml olarak guncelledik
  // Oluşturulan HTML kodunu sayfaya ekle
  productCardLeft.innerHTML = cardsHtml;
}

// Sepetin bulunduğu div öğesini seçiyoruz.
const myCart = document.querySelector(".mycart");
// Toplam fiyatın gösterildiği öğeyi seçiyoruz.
const totalPrice = document.querySelector(".total-price");
// Sepetteki ürün miktarının gösterildiği öğeyi seçiyoruz.
const countQuantity = document.querySelector(".count-quantity");
let cart = []; //boŞ sepet oluşturur

//ekleme fonksyionu
function addProduct(id) {
  console.log("ADDPRODUCT");
  // Eklenmek istenen ürünü buluyoruz.
  const eklenecekUrun = products.find((item) => item.id === id);
  console.log("eklenecekUrun", eklenecekUrun);

  //urun varsa cartta indexini verir, yoksa -1 dondurur
  const index = cart.findIndex((item) => item.id === id); // Ürünün sepet içindeki indexini buluyoruz.
  // console.log("INDEXXXX", index, cart[index], cart);

  if (index !== -1) {
    cart[index].quantity += 1; // Ürün sepette bulunuyorsa, miktarını 1 artırıyoruz.
    console.log("CART", cart);

    // Güncellenen ürünün kartını seçiyoruz.
    const existingCard = document.getElementById(eklenecekUrun.id);

    // Miktarı gösteren span öğesini seçiyoruz.
    const quantitySpan = existingCard.querySelector(".mycart-price span");
    // Toplam fiyatı gösteren öğeyi seçiyoruz.
    const priceSpan = existingCard.querySelector(".mycart-total");

    // Miktar ve toplam fiyat bilgilerini güncelliyoruz.
    quantitySpan.textContent = `$${eklenecekUrun.price} x ${cart[index].quantity}`;
    priceSpan.textContent = `$${(
      eklenecekUrun.price * cart[index].quantity
    ).toFixed(2)}`;
  } else {
    const yeniUrunHtml = `
      <div class="card" id="${eklenecekUrun.id}">
        <img src="${eklenecekUrun.image}" alt="${eklenecekUrun.title}">
        <div class="mycart-price">
          <p>${eklenecekUrun.title}</p>
          <span>$${eklenecekUrun.price} x 1</span>
        </div>
        <div class="mycart-total">
          $${eklenecekUrun.price}
        </div>
      </div>
    `;
    myCart.innerHTML += yeniUrunHtml; // Yeni ürünü sepete ekliyoruz.

    const newItem = {
      quantity: 1,
      ...eklenecekUrun,
    };
    cart.push(newItem); // Yeni ürünü sepet array'ine ekliyoruz.
  }

  // Toplam fiyatı güncelliyoruz.
  totalPrice.innerHTML = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  // Sepetteki toplam ürün miktarını güncelliyoruz.
  countQuantity.innerHTML = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Arama butonunu seçiyoruz.
const searchButton = document.querySelector(".header-main-right button");
// Arama kutusunu seçiyoruz.
const searchInput = document.querySelector(".header-main-right input");

// Arama kutusunda her değişiklik olduğunda çalışacak olan "change" olayını dinliyoruz.
searchInput.addEventListener("change", () => {
  // Arama kutusundaki değeri küçük harflere çeviriyoruz.
  const searchValue = searchInput.value.toLowerCase();

  // Ürünler listesini arama değerine göre filtreliyoruz.
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );

  // Filtrelenmiş ürünleri göstermek için bir fonksiyon çağırıyoruz (showProductCards).
  showProductCards(filteredProducts);
});

// DOM elemanları
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const applyFilterButton = document.getElementById("apply-filter");
const productCardContainer = document.querySelector(".product-card-container");
//NodeList genellikle querySelectorAll() veya benzeri metodlarla oluşturulur ve belge öğeleri ile çalışırken oldukça yaygın olarak kullanılır.
const radioButtons = document.getElementsByName("rate-filter"); // Radio butonlarını seçin name ozelligine gore radio filterini sectik
console.log(radioButtons);
// Filtreleme düğmesine tıklama olayı ekle
applyFilterButton.addEventListener("click", () => {
  // Seçilen kategori ve fiyat filtreleri

  // Seçilen kategori değeri
  const selectedCategory = categoryFilter.value; 
  // Seçilen fiyat değeri
  const selectedPrice = priceFilter.value; 
  // Seçilen puan filtresi değeri
  const selectedRadio = document.querySelector('input[name="rate-filter"]:checked').value; 


  console.log("selectedCategory", selectedCategory);
  console.log("selectedPrice", selectedPrice);
  console.log("HANgisi SECILI", selectedRadio);

  let filtered = [];
  // Filtreleme işlemi
  const filteredProducts = products.filter((product, i) => {
    //categoriler icin
    if (
      product.category === selectedCategory ||
      selectedCategory === "allCategory"
    ) {
      // console.log('product.category ',product.category, i )
      console.log(priceFunc(product, selectedPrice, selectedRadio));
      return priceFunc(product, selectedPrice, selectedRadio);
    }
  });
  console.log("filtered", filtered);
  console.log("filteredProducts", filteredProducts);

  // Filtrelenmiş ürünleri göster
  showProductCards(filteredProducts);
});

function priceFunc(product, selectedPrice, selectedRadio) {
  // Tüm fiyatlar seçeneği kontrolü
  if (selectedPrice === "allPrice") {
    return rateFunc(product, selectedRadio);
  }
  if (selectedPrice === "0-10") {
    // 0-10 fiyat aralığı kontrolü
    if (product.price > 0 && product.price < 10) {
      //price 0 dan buyuk 10dan kucuk olanlar
      // filtered.push(product)
      return rateFunc(product, selectedRadio);
    }
  }
  if (selectedPrice === "10-100") {
    // 10-100 fiyat aralığı kontrolü
    if (product.price > 10 && product.price < 100) {
      //price 10 dan buyuk 100dan kucuk olanlar
      // filtered.push(product)
      return rateFunc(product, selectedRadio);
    }
  }
  if (selectedPrice === "100-500") {
    // 100-500 fiyat aralığı kontrolü
    if (product.price > 100 && product.price < 500) {
      //price 100 dan buyuk 500dan kucuk olanlar
      // filtered.push(product)
      return rateFunc(product, selectedRadio);
    }
  }
  if (selectedPrice === "500-") {
    // 500 ve üzeri fiyat kontrolü
    if (product.price > 500) {
      //price 500 dan buyuk  olanlar
      // filtered.push(product)
      return rateFunc(product, selectedRadio);
    }
  }
}

function rateFunc(product, selectedRadio) {
  console.log("BURASI RATEFUNCT SELECTRADIO nedir =>", product, selectedRadio);
  // Tüm puanlar seçeneği kontrolü
  if (selectedRadio === "allRate") {
    console.log("RATEFUNC", product);
    return product;
  }
  // 1-5 puan aralığı kontrolü
  if (selectedRadio === "1-5" && product.rating.rate >= 1) {
    return product;
  }
  // 2-5 puan aralığı kontrolü
  if (selectedRadio === "2-5" && product.rating.rate >= 2) {
    return product;
  }
  // 3-5 puan aralığı kontrolü
  if (selectedRadio === "3-5" && product.rating.rate >= 3) {
    return product;
  }
  // 4-5 puan aralığı kontrolü
  if (selectedRadio === "4-5" && product.rating.rate >= 4) {
    return product;
  }
}


const helpWindow = document.querySelector(".help");
const helpScreenWindow = document.querySelector(".help-process i");
const chatWindow = document.querySelector(".help-chat");
const myQuestion = document.querySelector(".help-process input");

helpScreenWindow.addEventListener("click", () => {
  if (chatWindow.style.display === "flex") {
    chatWindow.style.display = "none";
    helpWindow.style.cssText = "right: -250px;";
    helpScreenWindow.className='fa-solid fa-comment-dots'
  } else {
    chatWindow.style.display = "flex";
    helpWindow.style.cssText = "right:0; ";
    helpScreenWindow.className='fa-solid fa-arrow-right'
  }
});

const leftChat = chatWindow.querySelector(".help-chat-left");
const rightChat = chatWindow.querySelector(".help-chat-right");

myQuestion.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(myQuestion.value);

    let myQuestionHtml = "";

    // Kullanıcının sorusunu içeren HTML oluşturulur
    myQuestionHtml = ` <div class="help-chat-right">
      <p>${myQuestion.value}</p>
    </div>`;
    // belirli bir HTML kodunu belirli bir konuma eklemeye yarar. 
    //beforeend parametresi, chatWindow elementinin sonuna eklemek için kullanılır.
    chatWindow.insertAdjacentHTML("beforeend", myQuestionHtml);
    //(x,y) olarak 2 paremetre aldigindan chatWindow boyunu y eksenine 
    //esitleyerek en altta focuslanir
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
    //otomatik olarak en alt noktaya kaydırma işlemini gerçekleştirmek
    console.log("YUKSEKLIGI");

    /* 
    // HTTP başlıkları ayarlanır
    const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
    };
    */
    // GPT-3 modeli ve kullanıcı mesajı belirlenir

    const model = "gpt-3.5-turbo";
    const userMessage = { role: "user", content: myQuestion.value };

    // HTTP başlıkları ayarlanır
    /* const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    }; */
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      //Fetch API, body parametresine gönderilen veriyi JSON formatında alır.
      // veriyi JSON formatına dönüştürmek için JSON.stringify() kullanmanız gerekmektedir.
      body: JSON.stringify({
        model: model,
        messages: [userMessage],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("datadan", data);
        let chatGpt = `
        <div class="help-chat-left">
                <p>${data.choices[0].message.content}</p>
            </div>
        `;

        // belirli bir HTML kodunu belirli bir konuma eklemeye yarar. 
        //beforeend parametresi, chatWindow elementinin sonuna eklemek için kullanılır.
        chatWindow.insertAdjacentHTML("beforeend", chatGpt);

        // Chat penceresini aşağı kaydırır
        chatWindow.scrollTo(0, chatWindow.scrollHeight);
        // console.log("YUKSEKLIGI", chatWindow.scrollHeight);

        // Input alanını temizler
        myQuestion.value = ""; //input alinini temizler
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
//Chat penceresini aşağı kaydırır
chatWindow.scrollTo(0, chatWindow.scrollHeight);
// console.log("YUKSEKLIGI", chatWindow.scrollHeight);

