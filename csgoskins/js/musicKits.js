document.addEventListener("DOMContentLoaded", loadFromJSONBinMUSICKITS);

const BIN_ID2 = "67c60fcfad19ca34f815ef2e";

async function saveToJSONBinMUSICKITS() {
  const items = document.querySelectorAll(".musicKit");
  let data = [];

  items.forEach((div) => {
    const button = div.querySelector(".musicBtn");
    data.push({
      colorClass: div.classList.contains("ObackColor")
        ? "ObackColor"
        : "backColor",
      buttonClass: button.classList.contains("deown") ? "deown" : "owned",
    });
  });

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID2}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ items: data }),
  });

  const result = await response.json();
}

async function loadFromJSONBinMUSICKITS() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${BIN_ID2}/latest`,
    {
      headers: { "X-Master-Key": API_KEY },
    }
  );

  const result = await response.json();
  const items = document.querySelectorAll(".musicKit");

  result.record.items.forEach((item, index) => {
    if (items[index]) {
      items[index].classList.remove("backColor", "ObackColor");
      items[index].classList.add(item.colorClass);

      const button = items[index].querySelector(".musicBtn");
      button.classList.remove("owned", "deown");
      button.classList.add(item.buttonClass);
    }
  });
}

document.querySelectorAll(".musicBtn").forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(saveToJSONBinMUSICKITS, 500); // Save x ms after a change
  });
});
