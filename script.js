const dropdowns = document.querySelectorAll(".dropdown");

const navButtons = document.querySelectorAll("button[data-href]");

const content = document.querySelector("content");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", handleDropdownClick);
  dropdown.addEventListener("focus", handleDropdownFocus);
  dropdown.addEventListener("blur", handleDropdownBlur);
});

navButtons.forEach((menuItem) =>
  menuItem.addEventListener("click", handleNavButtonClick)
);

function handleDropdownBlur(event) {
  this.classList.remove("clicked");
}

function handleDropdownFocus(event) {
  this.classList.add("clicked");
}

function handleDropdownClick(event) {
  const menu = this.querySelector("ul");
  const dropdownButton = this.querySelector(":first-child");
  const arrowDownIcon = this.querySelector(".arrow-down");

  menu.classList.toggle("clicked");
  dropdownButton.classList.toggle("clicked");
  arrowDownIcon.classList.toggle("rotated");
}

async function handleNavButtonClick(event) {
  const response = await fetch(this.getAttribute("data-href"));
  const html = await response.text();
  content.innerHTML = html;
}

document.body.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector("ul").classList.remove("clicked");
      dropdown.querySelector(".arrow-down").classList.remove("rotated");
      dropdown.querySelector(":first-child").classList.remove("clicked");
    });
  }
});
