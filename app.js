let ratingValue = null;

// Add event listeners to round buttons to store the rating value
document.querySelectorAll(".round").forEach((button) => {
  button.addEventListener("click", function () {
    ratingValue = this.getAttribute("data-value");
    document
      .querySelectorAll(".round")
      .forEach((btn) => (btn.style.backgroundColor = "#71798195"));
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
  });
});

function giveRating(event) {
  event.preventDefault();
  if (ratingValue !== null) {
    let innerContainer = document.querySelector("#inner");
    innerContainer.innerHTML = document.querySelector("#hidden-part").innerHTML;
    let ratingSpan = innerContainer.querySelector("#rating");
    ratingSpan.innerHTML = ratingValue;
  } else {
    alert("Please select a rating before submitting.");
  }
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", giveRating);
