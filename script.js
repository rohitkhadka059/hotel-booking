// Form Validation + Interaction

document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const destination = document.getElementById("destination");
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");

  let valid = true;

  if (destination.value.trim() === "") {
    destination.classList.add("is-invalid");
    valid = false;
  } else {
    destination.classList.remove("is-invalid");
  }

  if (checkin.value === "" || checkout.value === "") {
    alert("Please select both check-in and check-out dates.");
    valid = false;
  }

  if (valid) {
    alert(`Searching hotels in ${destination.value}...`);
  }
});


// Dynamic Card Click Effect
const cards = document.querySelectorAll(".property-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("border-primary");
  });
});
