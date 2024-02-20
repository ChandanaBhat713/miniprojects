const url = "https://the-weather-api.p.rapidapi.com/api/weather/mumbai";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2f49dbd44dmshc15f65da97f784fp1449f9jsn14f79ea21e2b",
    "X-RapidAPI-Host": "the-weather-api.p.rapidapi.com",
  },
};

try {
  let response = await fetch(url, options);
  let result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
console.log("hello");
document
  .getElementById("searchinput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchform").submit();
    }
  });
