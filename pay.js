document.querySelector("#myform").addEventListener("submit", add);
var arr = JSON.parse(localStorage.getItem("payment")) || [];

function add(event) {
  event.preventDefault();

  var payobj = {
    name: myform.name.value,
    address: myform.address.value,
    mobile: myform.mobile.value,
    city: myform.city.value,
    State: myform.select1.value,
    country: myform.select2.value,
    pin: myform.pin.value,
  };
  arr.push(payobj);
  console.log("here");
  localStorage.setItem("payment", JSON.stringify(arr));
}

document.querySelector("#myform").addEventListener("submit", click);
function click() {
  location.href = "payment2.html";
}

