const list = document.querySelector("ul");

const valueArray = [];
setInterval(generateBarCharts, 1000);

function generateBarCharts() {
  let rndNum = Math.floor(Math.random() * 101);
  valueArray.push(rndNum);
  if (valueArray.length >= 20) {
    valueArray.shift();
  }
  const li = document.createElement("li");
  li.style.setProperty("--height", rndNum);
  list.appendChild(li);
}



// Anden løsning skal li indkommenteres i html og css, så der fåes 20 søjler
