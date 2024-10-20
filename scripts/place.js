function calculateWindChill(temp, windSpeed) {
  return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
}

function displayWindChill() {
  let temp = 45;
  let windSpeed = 10;
  if (temp <= 50 && windSpeed > 3) {
    let windChill = calculateWindChill(temp, windSpeed).toFixed(2);
    document.getElementById("windChill").innerText = windChill + " °F";
  } else {
    document.getElementById("windChill").innerText = "N/A";
  }
}

window.onload = displayWindChill;
