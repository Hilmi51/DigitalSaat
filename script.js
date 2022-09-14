function GetTime() {
  let date = new Date(); // Anlık Tarih/Saat Bilgileri almamızı sağlar.
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  hour < 10
    ? (document.getElementById("hour").innerHTML = "0" + hour)
    : (document.getElementById("hour").innerHTML = hour);

  minute < 10
    ? (document.getElementById("minute").innerHTML = "0" + minute)
    : (document.getElementById("minute").innerHTML = minute);
  second < 10
    ? (document.getElementById("second").innerHTML = "0" + second)
    : (document.getElementById("second").innerHTML = second);

  document.getElementById("date").innerHTML =
    day + " / " + month + " / " + year;
}

setInterval(function () {
  GetTime();
}, 1);
