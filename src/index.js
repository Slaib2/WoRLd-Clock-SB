//Cairo
setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");
  cairoDateElement.innerHTML = cairoTime.format("dddd MMMM Do YYYY");
  cairoTimeElement.innerHTML = cairoTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1);

//Berlin
setInterval(function () {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("dddd MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1);
