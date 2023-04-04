const day1 = document.getElementById("day");
const hour1 = document.getElementById("hour");
const minute1 = document.getElementById("minute");
const ampm1 = document.getElementById("ampm");
const citySelect1 = document.getElementById("city");
const format1 = document.getElementById("format");


const cityBackgrounds = {
  "Kiev": "C:/Users/admin/Documents/GitHub/JavaScript/kiev_background.jpg",
  "London": "C:/Users/admin/Documents/GitHub/JavaScript/london_background.jpg", 
  "New York": "C:/Users/admin/Documents/GitHub/JavaScript/newyork_background.jpg",
  "Berlin": "C:/Users/admin/Documents/GitHub/JavaScript/berlin_background.jpg"
}

function updateBackground(city) {
  const background = cityBackgrounds.hasOwnProperty(city) ? cityBackgrounds[city] : "C:/Users/admin/Documents/GitHub/JavaScript/default_background.jpg";
  document.body.style.backgroundImage = `url(${background})`;
}

function updateTime(city) {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  day1.innerText = day;

  const cityOffsets = {
    "Kiev": 0,
    "London": -2,
    "New York": -7,
    "Berlin": -1
  }

  const cityOffset = cityOffsets.hasOwnProperty(city) ? cityOffsets[city] : 0;
  const utc = now.getTime() + (now.getTimezoneOffset());
  const cityTime = new Date(utc + (3600000 * cityOffset));

  let hours = cityTime.getHours();
  let format = format1.value;
  if (format === "12") {
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    ampm1.innerText = ampm;
  } else if (format === "24") {
    ampm1.innerText = "";
  }
  hour1.innerText = hours < 10 ? "0" + hours : hours;

  let minutes = cityTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minute1.innerText = minutes;


}

updateTime(citySelect1.value);

citySelect1.addEventListener("change", () => {
  const city = citySelect1.value;
  updateBackground(city);
  updateTime(city);
});

format1.addEventListener("change", () => {
  const city = citySelect1.value;
  updateTime(city);
});
