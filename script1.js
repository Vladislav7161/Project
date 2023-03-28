const day1 = document.getElementById("day");
const hour1 = document.getElementById("hour");
const minute1 = document.getElementById("minute");
const ampm1 = document.getElementById("ampm");
const citySelect1 = document.getElementById("city");
const formatSelect1 = document.getElementById("format");


function updateTime(city) {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  day1.innerText = day;

  const cityOffsets = {
    "Kiev" : 0,
    "London" : -2,
    "New York" : -7,
    "Berlin" : -1

  }

  const cityOffset = cityOffsets.hasOwnProperty(city) ? cityOffsets[city] : 0;
  const utc = now.getTime() + (now.getTimezoneOffset());
  const cityTime = new Date(utc + (3600000 * cityOffset));
  
  
  let hours = cityTime.getHours();
  hours = hours % 12;
  hours = hours ? hours : 12;
  hour1.innerText = hours;

  let minutes = cityTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minute1.innerText = minutes;

  let ampm = hours >= 12 ? 'PM' : 'AM';
  ampm1.innerText = ampm;
}

updateTime();

citySelect1.addEventListener("change", () => {
  const city = citySelect1.value;
  updateTime(city);
});

