//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1.
function renderReview(review) {
  const reviewsSection = document.querySelector(".reviews");
  const container = document.createElement("div");
  container.classList.add("review_container");

  const img = document.createElement("img");
  img.src = review.image; 

  const details = document.createElement("div");

  const username = document.createElement("p");
  username.textContent = review.username;

  const rating = document.createElement("p");
  rating.textContent = `🌟  ${review.star} Star`;

  const comment = document.createElement("p");
  comment.textContent = review.review;

  details.appendChild(username);

  details.appendChild(rating);
  details.appendChild(comment);

  container.appendChild(img);
  container.appendChild(details);

  reviewsSection.appendChild(container);

}


reviews.forEach(renderReview);
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const username = document.getElementById("username").value;
  const image = document.getElementById("image").value;
  const star = parseInt(document.getElementById("star").value);
  const reviewText = document.getElementById("review").value;

  if (!username || !image || !reviewText) {
    alert("Entering an answer in all fields is required!");
    return;
  }

  const newReview = { username, image, star, review: reviewText };
  reviews.push(newReview);

  renderReview(newReview);
  updateAverageRating();




  e.target.reset();
});

function updateAverageRating() {
  const avgRating = calculateStarAverage(reviews);
  document.querySelector(".starRating").textContent = `Star Rating: 🌟  ${avgRating.toFixed(1)}`;
}
//updating the rating 
updateAverageRating();
