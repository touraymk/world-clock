function updateTime() {
  // Manila
  let manilaElement = document.querySelector("#manila") ;
  if (manilaElement) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeElement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaDateElement.innerHTML = manilaTime.format("MMMM Do, YYYY");
    manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");
    console.log(manilaTime)
  }

  //Wellington
  let mexicoCityElement = document.querySelector("#mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");

    mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do, YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format("h:mm:ss [<small>]A[</small>]");
    console.log(mexicoCityTime);
  }
}

updateTime();
//setInterval(updateTime, 1000)