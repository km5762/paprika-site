const dropdowns = document.querySelectorAll(".dropdown");

const menuItems = document.querySelectorAll(".dropdown li");

const content = document.querySelector("content");

dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("mouseenter", handleDropdownMouseEnter)
);

dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("mouseleave", handleDropdownMouseLeave)
);

menuItems.forEach((menuItem) =>
  menuItem.addEventListener("click", handleMenuItemClick)
);
function handleDropdownMouseEnter(event) {
  const menu = this.querySelector("ul");
  menu.style.display = "block";
}

function handleDropdownMouseLeave(event) {
  const menu = this.querySelector("ul");
  menu.style.display = "none";
}

async function handleMenuItemClick(event) {
  const response = await fetch(this.getAttribute("data-href"));
  const html = await response.text();
  content.innerHTML = html;
}
