const errorBox = document.getElementById("error-handle");
const loadData = () => {
  const inputFeild = document.getElementById("input-feild");
  const searchText = inputFeild.value;

  //   console.log(searchText);
  if (searchText == "") {
    errorBox.innerHTML = `
    <h3 class= "text-center text-danger">Please Write somthing!!!</h3>
    `;
  } else {
    errorBox.textContent = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=4f031d02d8b0bc06fee1d0b05c173d7d`;
    //   console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data));
    inputFeild.value = "";
  }
};

const displayWeather = (data) => {
  const weatherBox = document.getElementById("weather-container");
  weatherBox.textContent = "";
  //   Error Handler
  if (data.message === "city not found") {
    errorBox.innerHTML = `
        <h3 class= "text-center text-danger">No Result Found!!</h3>
        `;
  } else {
    errorBox.textContent = "";
    console.log("got you");
    //   console.log(data.main.temp);
    const weatherDiv = document.createElement("div");
    weatherDiv.innerHTML = `
  <img src="https://openweathermap.org/img/w/${
    data.weather[0].icon
  }.png" alt="" />
        <h1>${data.name} </h1>
        <h3><span>${parseFloat(data.main.temp - 273).toFixed(
          2
        )}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
  `;
    weatherBox.appendChild(weatherDiv);
  }
};
