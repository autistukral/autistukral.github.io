document.addEventListener("DOMContentLoaded", loadFromJSONBinAGENTS);

const BIN_ID3 = "67c61644e41b4d34e4a03719";

async function saveToJSONBinAGENTS() {
  const items = document.querySelectorAll(".agents");
  let data = [];

  items.forEach((div) => {
    const button = div.querySelector(".agentBtn");
    data.push({
      colorClass: div.classList.contains("ObackColor")
        ? "ObackColor"
        : "backColor",
      buttonClass: button.classList.contains("deown") ? "deown" : "owned",
    });
  });

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID3}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ items: data }),
  });

  const result = await response.json();
}

async function loadFromJSONBinAGENTS() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${BIN_ID3}/latest`,
    {
      headers: { "X-Master-Key": API_KEY },
    }
  );

  const result = await response.json();
  const items = document.querySelectorAll(".agents");

  result.record.items.forEach((item, index) => {
    if (items[index]) {
      items[index].classList.remove("backColor", "ObackColor");
      items[index].classList.add(item.colorClass);

      const button = items[index].querySelector(".agentBtn");
      button.classList.remove("owned", "deown");
      button.classList.add(item.buttonClass);
    }
  });
  loaded();
}

document.querySelectorAll(".agentBtn").forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(saveToJSONBinAGENTS, 500); // Save x ms after a change
  });
});
