const dropdowns = document.querySelectorAll(".dropdown");

const menuItems = document.querySelectorAll(".dropdown li button");

const content = document.querySelector("content");

dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("click", handleDropdownClick)
);

menuItems.forEach((menuItem) =>
  menuItem.addEventListener("click", handleMenuItemClick)
);

function handleDropdownClick(event) {
  const menu = this.querySelector("ul");
  const arrowDownIcon = this.querySelector(".arrow-down");

  menu.classList.toggle("clicked");
  arrowDownIcon.classList.toggle("rotated");
}

async function handleMenuItemClick(event) {
  const response = await fetch(this.getAttribute("data-href"));
  const html = await response.text();
  content.innerHTML = html;
}

document.body.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector("ul").classList.remove("clicked");
      dropdown.querySelector(".arrow-down").classList.remove("rotated");
    });
  }
});
