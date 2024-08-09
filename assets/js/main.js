let icons = document.querySelector(".links .icons")
let spanIcon = document.querySelector(".links .icons .span-icon");
let ul = document.querySelector(".links ul");
let shortSpan = document.getElementById("short-span");
let burgerIcon = document.querySelector(".links .icons .burger-icon")

function itemVisibility(item, itemState = "visible") {
  item.style.visibility = itemState;
}

function linksOnClick(item) {
  if (item.style.visibility === "hidden") {
    shortSpan.style.width = "100%";
    spanIcon.style.transitionDelay = "0s";
    spanIcon.style.transitionDuration = "0.3s";
    burgerIcon.style.transitionDelay = "1s";
    itemVisibility(item);
    itemVisibility(spanIcon, "hidden");
    itemVisibility(burgerIcon);
  } else {
    shortSpan.style.width = "60%";
    spanIcon.style.transitionDelay = "1s";
    burgerIcon.style.transitionDelay = "0.3s";
    item.style.transitionDelay = "0.7s";
    itemVisibility(item, "hidden");
    itemVisibility(burgerIcon, "hidden");
    itemVisibility(spanIcon);
  }
}

itemVisibility(burgerIcon, "hidden")
itemVisibility(ul, "hidden")

document.addEventListener("DOMContentLoaded", function() {
  icons.addEventListener("click", function() {
    linksOnClick(ul)
  });
});