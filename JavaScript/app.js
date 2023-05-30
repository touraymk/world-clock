function updateTime() {
  //Manila
  let manilaElement = document.querySelector("#manila");
  if (manilaElement) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeElement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaDateElement.innerHTML = manilaTime.format("dddd, MMMM Do YYYY");
    manilaTimeElement.innerHTML = manilaTime.format("hh:mm:ss [<small>]A[</small>]");
  }
  // Mexico City
  let mexicoCityElement = document.querySelector("#mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_city");

    mexicoCityDateElement.innerHTML = mexicoCityTime.format("dddd, MMMM Do YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format("hh:mm:ss [<small>]A[</small>]");
  }

  // Banjul
  let banjulElement = document.querySelector("#banjul");
  if (banjulElement) {
    let banjulDateElement = banjulElement.querySelector(".date");
    let banjulTimeElement = banjulElement.querySelector(".time");
    let banjulTime = moment().tz("Africa/Banjul");

    banjulDateElement.innerHTML = banjulTime.format("dddd, MMMM Do YYYY");
    banjulTimeElement.innerHTML = banjulTime.format("hh:mm:ss [<small>]A[</small>]");
  }
}

function displaySelectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", displaySelectedCity);