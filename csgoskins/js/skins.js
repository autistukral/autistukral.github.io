document.addEventListener("DOMContentLoaded", loadFromJSONBinSKINS);

const API_KEY = "$2a$10$LRoKs1hjGMPv.jhM8Ta92OdDbgGZuiY0yWYlHjPtIUg.r/yK/tHZK";
const BIN_ID = "67c5f94dad19ca34f815e3c9";

async function saveToJSONBinSKINS() {
  const items = document.querySelectorAll(".skins");
  let data = [];

  items.forEach((div) => {
    const button = div.querySelector(".skinBtn");
    data.push({
      colorClass: div.classList.contains("ObackColor")
        ? "ObackColor"
        : "backColor",
      buttonClass: button.classList.contains("deown") ? "deown" : "owned",
    });
  });

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ items: data }),
  });

  const result = await response.json();
}

async function loadFromJSONBinSKINS() {
  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: { "X-Master-Key": API_KEY },
  });

  const result = await response.json();
  const items = document.querySelectorAll(".skins");

  result.record.items.forEach((item, index) => {
    if (items[index]) {
      items[index].classList.remove("backColor", "ObackColor");
      items[index].classList.add(item.colorClass);

      const button = items[index].querySelector(".skinBtn");
      button.classList.remove("owned", "deown");
      button.classList.add(item.buttonClass);
    }
  });
}

document.querySelectorAll(".skinBtn").forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(saveToJSONBinSKINS, 500); // Save x ms after a change
  });
});
