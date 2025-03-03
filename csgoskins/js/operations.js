document.addEventListener("DOMContentLoaded", loadFromJSONBinPASS);

const BIN_ID4 = "67c62035acd3cb34a8f46d92";

async function saveToJSONBinPASS() {
  const items = document.querySelectorAll(".pass");
  let data = [];

  items.forEach((div) => {
    const button = div.querySelector(".passBtn");
    data.push({
      colorClass: div.classList.contains("ObackColor")
        ? "ObackColor"
        : "backColor",
      buttonClass: button.classList.contains("deown") ? "deown" : "owned",
    });
  });

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID4}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ items: data }),
  });

  const result = await response.json();
}

async function loadFromJSONBinPASS() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${BIN_ID4}/latest`,
    {
      headers: { "X-Master-Key": API_KEY },
    }
  );

  const result = await response.json();
  const items = document.querySelectorAll(".pass");

  result.record.items.forEach((item, index) => {
    if (items[index]) {
      items[index].classList.remove("backColor", "ObackColor");
      items[index].classList.add(item.colorClass);

      const button = items[index].querySelector(".passBtn");
      button.classList.remove("owned", "deown");
      button.classList.add(item.buttonClass);
    }
  });
}

document.querySelectorAll(".passBtn").forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(saveToJSONBinPASS, 500); // Save x ms after a change
  });
});
