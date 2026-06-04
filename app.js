// Reads INVENTORY from data.js and renders the page.
// Shows saleValue if set, otherwise falls back to gameValue.

const grid  = document.getElementById("grid");
const empty = document.getElementById("empty");

function render() {
  const inStock = INVENTORY.filter(b => b.qty > 0);

  if (inStock.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  inStock.sort((a, b) => a.name.localeCompare(b.name));

  inStock.forEach((bottle, i) => {
    const price = bottle.saleValue ?? bottle.gameValue;
    const card = document.createElement("div");
    card.className = "bottle-card";
    card.style.animationDelay = `${0.05 * i}s`;
    card.innerHTML = `
      <div class="bottle-name">${esc(bottle.name)}</div>
      <div class="bottle-qty"><span>${bottle.qty}</span> available</div>
      <div class="bottle-price"><sup>$</sup>${price}</div>
    `;
    grid.appendChild(card);
  });
}

function esc(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

render();
