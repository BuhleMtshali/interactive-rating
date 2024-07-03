function giveRating(event) {
  event.preventDefault();
  let innerContainer = document.querySelector("#inner");
  let ratingNumbert = document.querySelector("#rating");
  let hiddenElement = document.querySelector("#hidden-part").innerHTML;
  innerContainer.innerHTML = hiddenElement;
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", giveRating);
