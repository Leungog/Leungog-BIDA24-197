function bookNow() {
  window.location.href = "online-booking.html";
}

function submitBooking() {
  alert("Your appointment has been submitted!");
  return false; // Prevent real form submission
}
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});
