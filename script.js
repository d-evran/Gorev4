let underlines = document.querySelectorAll(".underlines");

// Data Binding

function dataBind(event) {
  const value = event.value;
  const id = event.id;
  switch (id) {
    case "adsoyad":
      document.getElementById("name").innerHTML = value;
      document.getElementById("about").innerHTML = "";
      document.getElementById("work").innerHTML = "";
      if (document.getElementById("unvan").value === "") {
        document.getElementById("unvanad").style.visibility = "hidden";
      }
      break;
    case "unvan":
      document.getElementById("unvanad").style.visibility = "visible";
      document.getElementById("unvanad").innerHTML = value;
      break;
    case "telefon":
      document.getElementById("iletisim-telefon").innerHTML = value;
      break;
    case "mail":
      document.getElementById("iletisim-mail").innerHTML = value;
      break;
    case "web":
      document.getElementById("iletisim-web").innerHTML = value;
      break;
    case "adres":
      document.getElementById("iletisim-adres").innerHTML = value;
      break;
    case "aciklamaEgitim":
      document.getElementById("egitim-aciklamaegitim").innerHTML = value;
      break;
    case "birinciOkul":
      document.getElementById("egitim1").innerHTML = value;
      break;
    case "ikinciOkul":
      document.getElementById("egitim2").innerHTML = value;
      break;
    case "ucuncuOkul":
      document.getElementById("egitim3").innerHTML = value;
      break;
    case "birinciOkulAciklama":
      document.getElementById("egitimAciklama1").innerHTML = value;
      break;
    case "ikinciOkulAciklama":
      document.getElementById("egitimAciklama2").innerHTML = value;
      break;
    case "ucuncuOkulAciklama":
      document.getElementById("egitimAciklama3").innerHTML = value;
      break;
    case "aciklamaYetenek":
      document.getElementById("yetenek-aciklamaegitim").innerHTML = value;
      break;
    case "birinciYetenek":
      document.getElementById("yetenek1").innerHTML = value;
      break;
    case "ikinciYetenek":
      document.getElementById("yetenek2").innerHTML = value;
      break;
    case "birinciYetenekAciklama":
      document.getElementById("yetenekAciklama1").innerHTML = value;
      break;
    case "ikinciYetenekAciklama":
      document.getElementById("yetenekAciklama2").innerHTML = value;
      break;
    case "aciklamaHakkimda":
      document.getElementById("about").innerHTML = value;
      break;
    case "aciklamaIs":
      document.getElementById("work").innerHTML = value;
      break;
    case "arkaplanRenk":
      document.getElementById("cv-right").style.backgroundColor = value;
      break;
    case "solkolonRenk":
      document.getElementById("left-column").style.backgroundColor = value;
      break;
    case "isimKutusuRenk":
      document.getElementById("name-box").style.backgroundColor = value;
      break;
    case "isimKutusuYaziRenk":
      document.getElementById("name-box").style.color = value;
      document.getElementById("name-underline").style.borderColor = value;
      break;
    case "cizgiRenk":
      underlines.forEach((div) => {
        div.style.borderTopColor = value;
      });
    default:
      break;
  }
}

// Select Okul Sayisi ve Okullar
document.getElementById("okulSayisi").addEventListener("change", function () {
  if (this.value === "3") {
    document.getElementById("birinci-okul").style.display = "table-row";
    document.getElementById("ikinci-okul").style.display = "table-row";
    document.getElementById("ucuncu-okul").style.display = "table-row";
  } else if (this.value === "2") {
    document.getElementById("birinci-okul").style.display = "table-row";
    document.getElementById("ikinci-okul").style.display = "table-row";
    document.getElementById("ucuncu-okul").style.display = "none";
  } else if (this.value === "1") {
    document.getElementById("birinci-okul").style.display = "table-row";
    document.getElementById("ikinci-okul").style.display = "none";
    document.getElementById("ucuncu-okul").style.display = "none";
  } else {
    document.getElementById("birinci-okul").style.display = "none";
    document.getElementById("ikinci-okul").style.display = "none";
    document.getElementById("ucuncu-okul").style.display = "none";
  }

  let egitimler = document.getElementById("egitimler");
  egitimler.style.display = "block";
  for (let i = 1; i <= this.value; i++) {
    egitimler.innerHTML += `
        <li>
        <span id="egitim${i}"></span>
        <ul>
          <li><span id="egitimAciklama${i}"></span></li>
        </ul>
      </li>`;
  }
});

// Select Yetenek Sayiyi ve Yetenekler
document
  .getElementById("yetenekSayisi")
  .addEventListener("change", function () {
    if (this.value === "2") {
      document.getElementById("birinci-yetenek").style.display = "table-row";
      document.getElementById("ikinci-yetenek").style.display = "table-row";
    } else if (this.value === "1") {
      document.getElementById("birinci-yetenek").style.display = "table-row";
      document.getElementById("ikinci-yetenek").style.display = "none";
    } else {
      document.getElementById("birinci-yetenek").style.display = "none";
      document.getElementById("ikinci-yetenek").style.display = "none";
    }

    let yetenekler = document.getElementById("yetenekler");
    yetenekler.style.display = "block";
    for (let i = 1; i <= this.value; i++) {
      yetenekler.innerHTML += `
            <li>
            <span id="yetenek${i}"></span>
            <ul>
              <li><span id="yetenekAciklama${i}"></span></li>
            </ul>
          </li>`;
    }
  });

// Select cercerve sekli
document.getElementById("cerceveSekli").addEventListener("change", function () {
  if (this.value === "1") {
    document.getElementById("left-column-image").style.borderRadius = "0px";
  } else if (this.value === "2") {
    document.getElementById("left-column-image").style.borderRadius = "30px";
  } else {
    document.getElementById("left-column-image").style.borderRadius = "80px";
  }
});

// Select Yazi Tipi
document.getElementById("yaziTipi").addEventListener("change", function () {
  if (this.value === "1" || this.value === "") {
    document.getElementById("cv-right").style.fontFamily = "Times New Roman";
  } else if (this.value === "2") {
    document.getElementById("cv-right").style.fontFamily = "Courier New";
  } else if (this.value === "3") {
    document.getElementById("cv-right").style.fontFamily = "Lucida Sans";
  }
});

// Select Baslik Alti Cizgi
document.getElementById("cizgiSekli").addEventListener("change", function () {
  if (this.value === "1") {
    underlines.forEach((div) => {
      div.style.borderTopStyle = "dotted";
    });
  } else if (this.value === "2") {
    underlines.forEach((div) => {
      div.style.borderTopStyle = "dashed";
    });
  } else {
    underlines.forEach((div) => {
      div.style.borderTopStyle = "solid";
    });
  }
});
