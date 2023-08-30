const list = document.querySelector("ul");

setInterval(generateBarCharts, 1000);

function generateBarCharts() {
  let rndNum = Math.floor(Math.random() * 101);
  const li = document.createElement("li");
  li.style.setProperty("--height", rndNum);
  list.appendChild(li);
  if (list.children.length > 20) {
    list.removeChild(list.children[0]);
  }
}

