document.addEventListener("DOMContentLoaded", loadFromJSONBinPIN);

const BIN_ID5 = "67c623b4e41b4d34e4a03bd5";

async function saveToJSONBinPIN() {
  const items = document.querySelectorAll(".pin");
  let data = [];

  items.forEach((div) => {
    const button = div.querySelector(".pinBtn");
    data.push({
      colorClass: div.classList.contains("ObackColor")
        ? "ObackColor"
        : "backColor",
      buttonClass: button.classList.contains("deown") ? "deown" : "owned",
    });
  });

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID5}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ items: data }),
  });

  const result = await response.json();
}

async function loadFromJSONBinPIN() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${BIN_ID5}/latest`,
    {
      headers: { "X-Master-Key": API_KEY },
    }
  );

  const result = await response.json();
  const items = document.querySelectorAll(".pin");

  result.record.items.forEach((item, index) => {
    if (items[index]) {
      items[index].classList.remove("backColor", "ObackColor");
      items[index].classList.add(item.colorClass);

      const button = items[index].querySelector(".pinBtn");
      button.classList.remove("owned", "deown");
      button.classList.add(item.buttonClass);
    }
  });
}

document.querySelectorAll(".pinBtn").forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(saveToJSONBinPIN, 500); // Save x ms after a change
  });
});
